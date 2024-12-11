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
// Thread Save HashMap
import scala.collection.concurrent.TrieMap







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
  
 //_________MISCELLANEOUS_____________________________________________________

  def newGame() = Action {
    gameController.newGame;
    Ok("newGame")
  }
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
  object ConnectionManager {
    val clientConnections: TrieMap[String, ActorRef] = TrieMap.empty
  }
  
  
  // no reactions as of yet. Will be needed for 1 vs 1 mode
  class PokemonWebSocketActor(out: ActorRef, gameController: ControllerInterface, clientId: String) extends Actor with Observer{
    //gameController.add(this)
    println("WebSocketActor of " + clientId);

    
    override def update: Unit = {
      //println("\n\n Observer.update in WebSocket \n\n");
      //
      this.sendJsonToClient;
    }
      
    
    override def preStart(): Unit = {
      ConnectionManager.clientConnections.put(clientId, out)
      gameController.newGame
      sendJsonToClient;
    }

   
    def receive = {
      case json: JsValue =>
        try {
          if((json \ "state" \ "type").asOpt[String].contains("BattleEvalState")){
            println("\n\n\nBattle State in Server detected \n\n\n”");
            gameController.setGameJson(json);
            gameController.handleInput(" "); //<---- this fucks it up
            sendJsonToClient;
          }else if((json \ "state" \ "type").asOpt[String].contains("YourDeadState")){
            println("\n\n\nDead State in Server detected \n\n\n”");
            gameController.newGame;
            sendJsonToClient;
          }
          else {
            println("\n\nReceived Json in receive");
            gameController.setGameJson(json)
            println("\n\nsetgameJson() in receive");
            sendJsonToClient;
            println("\n\nSent updJson Client");
          }
        } catch {
          case e: Exception =>
            println(e);
        }

    }

    def sendJsonToClient = {
      ConnectionManager.clientConnections.get(clientId).foreach { ref =>
        if (ref == out) {
          println(s"\n\nPushing Json to clientId $clientId\n\n");
          ref ! (gameController.getGameJson);
        }else {
          println(s"Skipping update for client $clientId; not the requester")
        }
      }
    }
  }

  object PokemonWebSocketActorFactory {
    def create(out: ActorRef, clientId: String) = {
      Props(new PokemonWebSocketActor(out, gameController, clientId));
    }
  }

  //                                                
  def socket() = WebSocket.accept[JsValue, JsValue] { request  =>
    val session = request.session
    val clientId = session.get("clientId").getOrElse(java.util.UUID.randomUUID().toString)

    ActorFlow.actorRef {out => 
      println("\n\n\n\n Connect received \n\n\n\n");
      println(s"New connection with clientId: $clientId")
      PokemonWebSocketActorFactory.create(out, clientId);
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
