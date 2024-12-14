name := """pokeweb"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "3.4.1"



libraryDependencies += guice

libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.1" % Test
libraryDependencies += "com.fasterxml.jackson.core" % "jackson-databind" % "2.14.0"
libraryDependencies +=   "com.fasterxml.jackson.core" % "jackson-core" % "2.14.0"
libraryDependencies +=   "com.fasterxml.jackson.core" % "jackson-annotations" % "2.14.0"
libraryDependencies +=   "com.fasterxml.jackson.module" %% "jackson-module-scala" % "2.14.3"
libraryDependencies += "org.scala-lang.modules" %% "scala-swing" % "3.0.0"
libraryDependencies +=  "com.typesafe.scala-logging" %% "scala-logging" % "3.9.5"


assembly / assemblyJarName := "pokeweb.jar"

    assembly / assemblyMergeStrategy := {
      case PathList("META-INF", "MANIFEST.MF") => MergeStrategy.discard
      case PathList("META-INF", xs @ _) => MergeStrategy.discard
      case PathList("reference.conf") => MergeStrategy.concat
      case _  => MergeStrategy.first
    }


// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"
