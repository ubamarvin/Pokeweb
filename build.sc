import mill._
import $ivy.`com.lihaoyi::mill-contrib-playlib:`,  mill.playlib._

object pokeweb extends PlayModule with SingleModule {

  def scalaVersion = "3.4.1"
  def playVersion = "3.0.5"
  def twirlVersion = "2.0.1"

  object test extends PlayTests
}
