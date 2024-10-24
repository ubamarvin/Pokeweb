//HomeController.scala

package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import de.htwg.se.Pokeymon.Pokeymon
import java.net.Authenticator.RequestorType
import scala.concurrent.{ Future}


/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  val gameController = Pokeymon.controller;

  /*
  * Routes for /Tui
  */
  def tui() = Action {
  Ok(gameController.printDisplay)
  }

  def handleInput: Action[AnyContent] = Action { implicit request =>
    val body = request.body.asFormUrlEncoded
    body.map { args =>
      val input = args("input").head
      gameController.handleInput(input)
      Redirect(routes.HomeController.tui())}.getOrElse(Ok("didnt receive input")) 
}






  

 
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
