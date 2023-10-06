package s1.telegrambots
import s1.telegrambots.BasicBot
import scalaj.http.Http

import scala.collection.mutable
import scala.util.Using
import scala.io.Source
import java.io.*
import sttp.client3.{Response, SttpBackend, quickRequest}
import sttp.client3.quick.*
import sttp.client3.*

import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global

object YourBot extends App:
    object Bot extends BasicBot:

        var userCalendars = new mutable.HashMap()

        /**
         * TODO: Luokaa bottinne tähän metodeineen ja reagoijineen.
         */

        def getNewFile(msg: Message) =
            msg.document match
                case Some(document) =>
                    println("bruh")
                    val customBackend = HttpURLConnectionBackend()

                    val fileId = document.fileId
                    val request = quickRequest.get(uri"https://api.telegram.org/bot$token/getFile?file_id=$fileId")
                    val response: Response[String] = request.send(customBackend)

                    println("Viesti: " + response.toString())

                    val rsStr = response.toString()
                    val strings = rsStr.split(',')

                    var filepath: Option[String] = None

                    for (i <- strings.indices)
                        if (strings(i).contains("file_path")) then
                            filepath = Some(strings(i).split('"')(3))

                    println(filepath)





                    /*val responseFuture: Future[String] = Http().singleRequest(request).
                      flatMap(response => response.entity.toStrict(5.seconds).map(_.data.decodeString("UTF-8")))*/
                    //println(fileUrl)
                case None => println("nothing here")


        this.onUserMessage(getNewFile)

        var isWaitingForMessage = false

        // erkalle
        def replycom(msg: Message) =
            isWaitingForMessage = true
            "etner time"

        this.onUserCommand("time", replycom)

        def mes(msg: Message) =
            if (isWaitingForMessage)
                println(msg.text)

        this.onUserMessage(mes)
        // tähän asti

        //def vastaa(msg: Message) = "juu"

        //this.onUserMessageReply(vastaa)

        this.run()
        // Tarkistetaan, että lähti käyntiin
        println("Started the bot")

    end Bot

    // Tämä rivi pyytää ja ajaa täten yllä olevan botin
    val bot = Bot 
end YourBot
