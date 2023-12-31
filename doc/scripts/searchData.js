pages = [{"l":"index.html","n":"Scala3-TG","t":"Scala3-TG","d":"","k":"static"},
{"l":"s1/telegrambots.html","n":"s1.telegrambots","t":"package s1.telegrambots","d":"s1/telegrambots","k":"package"},
{"l":"s1/telegrambots.html","n":"bold","t":"def bold(text: String): String","d":"s1/telegrambots","k":"def"},
{"l":"s1/telegrambots.html","n":"formatAsCode","t":"def formatAsCode(text: String): String","d":"s1/telegrambots","k":"def"},
{"l":"s1/telegrambots.html","n":"italicize","t":"def italicize(text: String): String","d":"s1/telegrambots","k":"def"},
{"l":"s1/telegrambots.html","n":"link","t":"def link(text: String, url: String): String","d":"s1/telegrambots","k":"def"},
{"l":"s1/telegrambots.html","n":"preformatted","t":"def preformatted(text: String): String","d":"s1/telegrambots","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"BasicBot","t":"class BasicBot extends TelegramBot with Polling with Commands[Future] with Callbacks[Future] with ChatActions[Future]","d":"s1/telegrambots/BasicBot","k":"class"},
{"l":"s1/telegrambots/BasicBot.html","n":"Button","t":"type Button = InlineKeyboardButton","d":"s1/telegrambots/BasicBot","k":"type"},
{"l":"s1/telegrambots/BasicBot.html","n":"Message","t":"type Message = Message","d":"s1/telegrambots/BasicBot","k":"type"},
{"l":"s1/telegrambots/BasicBot.html","n":"client","t":"val client: RequestHandler[Future]","d":"s1/telegrambots/BasicBot","k":"val"},
{"l":"s1/telegrambots/BasicBot.html","n":"getChatId","t":"def getChatId(msg: Message): Long","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"getString","t":"def getString(msg: Message): String","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"getUserFirstName","t":"def getUserFirstName(msg: Message): String","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"killSwitch","t":"def killSwitch(): String","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"onJoinMessage","t":"def onJoinMessage(action: User => String): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"onUserCommand","t":"def onUserCommand(command: String, action: Message => String): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"onUserCommandWithArguments","t":"def onUserCommandWithArguments(command: String, action: Seq[String] => String): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"onUserExist","t":"def onUserExist(action: Message => Unit): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"onUserMessage","t":"def onUserMessage(action: Message => Unit): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"onUserMessageReply","t":"def onUserMessageReply(action: Message => String): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"onUserMessageReplyString","t":"def onUserMessageReplyString(action: String => String): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"onUserMessageString","t":"def onUserMessageString(action: String => Unit): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"sendBufferedImage","t":"def sendBufferedImage(image: BufferedImage, selectedChatId: ChatId): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"sendPhoto","t":"def sendPhoto(filename: String, selectedChatId: ChatId): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"token","t":"def token: String","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"viestintiedot","t":"def viestintiedot(msg: Message): Unit","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/BasicBot.html","n":"writeMessage","t":"def writeMessage(text: String, selectedChatId: ChatId): Future[Message]","d":"s1/telegrambots/BasicBot","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"Calendar","t":"class Calendar(events: Buffer[CalendarEvent], val timeCreated: Long)","d":"s1/telegrambots/Calendar","k":"class"},
{"l":"s1/telegrambots/Calendar.html","n":"addEvent","t":"def addEvent(startTime: String, endTime: String): Unit","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"addNightLimits","t":"def addNightLimits(eveningLimit: Int, morningLimit: Int, days: Int): Unit","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"eventList","t":"var eventList: Buffer[CalendarEvent]","d":"s1/telegrambots/Calendar","k":"var"},
{"l":"s1/telegrambots/Calendar.html","n":"fetchEmptySlots","t":"def fetchEmptySlots(calendar: Calendar, slotLength: Int, dayLimit: Int): Calendar","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"filterForCurrentTime","t":"def filterForCurrentTime(): Unit","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"fuseTwoCalendars","t":"def fuseTwoCalendars(calendar: Calendar): Calendar","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"limitEventsByDays","t":"def limitEventsByDays(days: Int): Unit","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"printList","t":"def printList(): Unit","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"removeCoveredEvents","t":"def removeCoveredEvents(): Unit","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"removeDayEvents","t":"def removeDayEvents(): Unit","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"sortEventsByStartTime","t":"def sortEventsByStartTime(): Unit","d":"s1/telegrambots/Calendar","k":"def"},
{"l":"s1/telegrambots/Calendar.html","n":"timeCreated","t":"val timeCreated: Long","d":"s1/telegrambots/Calendar","k":"val"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"CalendarEvent","t":"class CalendarEvent(var startTime: String, var endTime: String)","d":"s1/telegrambots/CalendarEvent","k":"class"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"covers","t":"def covers(event: CalendarEvent): Boolean","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"duration","t":"def duration: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endDay","t":"def endDay: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endHour","t":"def endHour: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endMinute","t":"def endMinute: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endMonth","t":"def endMonth: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endTime","t":"var endTime: String","d":"s1/telegrambots/CalendarEvent","k":"var"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endTimeInMinutes","t":"def endTimeInMinutes: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endYear","t":"def endYear: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endsDuring","t":"def endsDuring(event: CalendarEvent): Boolean","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"endsLaterThan","t":"def endsLaterThan(event: CalendarEvent): Boolean","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"existsDuring","t":"def existsDuring(event: CalendarEvent): Boolean","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"isSummerTime","t":"def isSummerTime(eventDate: String): Boolean","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startDay","t":"def startDay: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startHour","t":"def startHour: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startMinute","t":"def startMinute: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startMonth","t":"def startMonth: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startTime","t":"var startTime: String","d":"s1/telegrambots/CalendarEvent","k":"var"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startTimeInMinutes","t":"def startTimeInMinutes: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startYear","t":"def startYear: Int","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startsDuring","t":"def startsDuring(event: CalendarEvent): Boolean","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/CalendarEvent.html","n":"startsEarlierThan","t":"def startsEarlierThan(event: CalendarEvent): Boolean","d":"s1/telegrambots/CalendarEvent","k":"def"},
{"l":"s1/telegrambots/FileHandler$.html","n":"FileHandler","t":"object FileHandler","d":"s1/telegrambots/FileHandler$","k":"object"},
{"l":"s1/telegrambots/FileHandler$.html","n":"eventsFromICSFile","t":"def eventsFromICSFile(file: File): Buffer[CalendarEvent]","d":"s1/telegrambots/FileHandler$","k":"def"},
{"l":"s1/telegrambots/FilePreprocessor$.html","n":"FilePreprocessor","t":"object FilePreprocessor","d":"s1/telegrambots/FilePreprocessor$","k":"object"},
{"l":"s1/telegrambots/FilePreprocessor$.html","n":"getFile","t":"def getFile(userid: Long): Option[File]","d":"s1/telegrambots/FilePreprocessor$","k":"def"},
{"l":"s1/telegrambots/FilePreprocessor$.html","n":"getLog","t":"def getLog: Long","d":"s1/telegrambots/FilePreprocessor$","k":"def"},
{"l":"s1/telegrambots/FilePreprocessor$.html","n":"isPending","t":"def isPending(userid: Long): Int","d":"s1/telegrambots/FilePreprocessor$","k":"def"},
{"l":"s1/telegrambots/FilePreprocessor$.html","n":"parseFilepathsFromMessage","t":"def parseFilepathsFromMessage(msg: Message): Unit","d":"s1/telegrambots/FilePreprocessor$","k":"def"},
{"l":"s1/telegrambots/YourBot$.html","n":"YourBot","t":"object YourBot extends App","d":"s1/telegrambots/YourBot$","k":"object"},
{"l":"s1/telegrambots/YourBot$.html","n":"bot","t":"val bot: Bot.type","d":"s1/telegrambots/YourBot$","k":"val"},
{"l":"s1/telegrambots/YourBot$$Bot$.html","n":"Bot","t":"object Bot extends BasicBot","d":"s1/telegrambots/YourBot$$Bot$","k":"object"},
{"l":"s1/telegrambots/YourBot$$Bot$.html","n":"addUserToGroupBuffer","t":"def addUserToGroupBuffer(userid: Long, groupid: Long): Matchable","d":"s1/telegrambots/YourBot$$Bot$","k":"def"},
{"l":"s1/telegrambots/YourBot$$Bot$.html","n":"handleGroupMemberChanges","t":"def handleGroupMemberChanges(msg: Message): Unit","d":"s1/telegrambots/YourBot$$Bot$","k":"def"},
{"l":"s1/telegrambots/YourBot$$Bot$.html","n":"help","t":"def help(s: Message): String","d":"s1/telegrambots/YourBot$$Bot$","k":"def"},
{"l":"s1/telegrambots/YourBot$$Bot$.html","n":"isInteger","t":"def isInteger(s: String): Boolean","d":"s1/telegrambots/YourBot$$Bot$","k":"def"},
{"l":"s1/telegrambots/YourBot$$Bot$.html","n":"printfile","t":"def printfile(msg: Message): String","d":"s1/telegrambots/YourBot$$Bot$","k":"def"},
{"l":"s1/telegrambots/YourBot$$Bot$.html","n":"removeUserFromGroupBuffer","t":"def removeUserFromGroupBuffer(userid: Long, groupid: Long): Unit","d":"s1/telegrambots/YourBot$$Bot$","k":"def"},
{"l":"s1/telegrambots/YourBot$$Bot$.html","n":"when","t":"def when(msg: Message): String","d":"s1/telegrambots/YourBot$$Bot$","k":"def"},
{"l":"docs/index.html","n":"Scala3-TG","t":"Scala3-TG","d":"","k":"static"}];