import { createTransport, SendMailOptions } from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"
import { schedule, ScheduledTask } from "node-cron"

/**
 * 
 * @author Riddhiman Chowdhury <https://github.com/Riddhiman007>
 * @param {string} exp a time scheduler 
 * it has 6 stars (from left):
 ###  ┌────────────── second (optional)
 ### │ ┌──────────── minute
 ### │ │ ┌────────── hour
 ### │ │ │ ┌──────── day of month
 ### │ │ │ │ ┌────── month
 ### │ │ │ │ │ ┌──── day of week
 ### │ │ │ │ │ │
 ### │ │ │ │ │ │
 ### * * * * * *
 * @param {string|SMTPTransport|SMTPTransport.Options|undefined} smtp a nodemailer createTransport object
 * @param {SendMailOptions} content the content of the mail written in string but html form
 * @example 
 * '<html><body>this is a mail</body></html>'
 * @returns {ScheduledTask} a ScheduledTask
 * 
 * Here is an example how to use this function
 * @example <caption>For example you want to send mail to a user after 2 months 25 days </caption>
 * import {schedule_mail} from './send_mail'
 * const job = schedule_mail(" * * * * /3 * ", your smtp config goes here, your sendMail config goes here) // * /3 are joined. Due to jsDoc error, space is given 
 * job.start()
*/
export function schedule_mail(exp, smtp, content) {

    const transporter = createTransport(smtp)
    const job = schedule(exp, () => {
        const m = transporter.sendMail(content)
        return m
    })

    return job
}

