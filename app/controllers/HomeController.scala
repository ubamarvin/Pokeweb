//HomeController.scala

package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import de.htwg.se.Pokeymon.Pokeymon
// not needed
import de.htwg.se.Pokeymon.Controller.ControllerComponent.ControllerBaseImplementation.{StateChanged}
// not needed
import de.htwg.se.Pokeymon.Controller.ControllerComponent.ControllerInterface

import de.htwg.se.Pokeymon.Util.Observer

import java.net.Authenticator.RequestorType
import scala.concurrent.{ Future}
import play.api.libs.json.Json
import play.api.libs.json.JsValue

import org.apache.pekko.actor.{Actor, ActorRef, ActorSystem, Props}
import org.apache.pekko.stream.Materializer
import play.api.libs.streams.ActorFlow

import scala.swing.Reactor






/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents)(implicit system: ActorSystem, mat: Materializer) extends BaseController {

  val gameController = Pokeymon.controller;

  /*import de.htwg.se.minesweeper.controller.baseController.{
  BaseController => MinesweeperController
}
  * Routes for /Tui
  */
  //GET
  def tui() = Action {
  gameController.save
  Ok(views.html.tui(gameController.printDisplay))
  }

  
  //POST
  def handleInput: Action[AnyContent] = Action { implicit request =>
    val body = request.body.asFormUrlEncoded
    body.map { args =>
      val input = args("input").head
      gameController.handleInput(input)
      Redirect(routes.HomeController.tui())}.getOrElse(Ok("didnt receive input")) 
}

  /* 
  * Routes for Gui
   */
  //Get
  def gui() = Action {
    Ok(views.html.gui())
  }
  //Post

 //__________JSON_API__________________________________________________________

  def getJson() = Action {
    val json: JsValue = gameController.getGameJson
    Ok(json)
  }

  def postJson() : Action[AnyContent] = Action {implicit request =>
    request.body.asJson match {
      case Some(jsValue) =>
        println(s"\n\n Received JSON: $jsValue \n\n")
        gameController.setGameJson(jsValue)
        Ok(Json.obj("status" -> "succes", "message" ->"JSON data receive"))
      case None =>
        Ok(Json.obj("status" -> "error", "message" -> "Expected JSON"))
      }

  }

  //_________WEBSOCKET_________________________________________________________
  
  
  
  // no reactions as of yet. Will be needed for 1 vs 1 mode
  class PokemonWebSocketActor(out: ActorRef, gameController: ControllerInterface) extends Actor with Observer{
    gameController.add(this)

    override def update: Unit = {
      println("\n\n Observer.update in WebSocket \n\n");
      this.sendJsonToClient;
    }
    
    override def preStart(): Unit = {
      sendJsonToClient;
    }

   
    def receive = {
      case json: JsValue =>
        println("/n/n Received Json in receive");
        gameController.setGameJson(json)
        println("/n/n setgameJson() in receive");
        out ! (gameController.getGameJson)
        println("/n/n Sent updJson Client");

    }

    def sendJsonToClient = {
      println("/n/n Pushing initial Json to client");
      out ! (gameController.getGameJson);
      println("/n/n pushed initial Json to client");
    }
  }

  object PokemonWebSocketActorFactory {
    def create(out: ActorRef) = {
      Props(new PokemonWebSocketActor(out, gameController));
    }
  }

  //                                                
  def socket() = WebSocket.accept[JsValue, JsValue] { request  =>
  ActorFlow.actorRef {out => 
    println("\n\n\n\n Connect received \n\n\n\n");
    PokemonWebSocketActorFactory.create(out);
  }}


 

  

  



  
  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }
}
