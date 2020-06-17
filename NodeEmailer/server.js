require('dotenv').config()

const nodemailer = require("nodemailer")

function sendMail(mailDetails) {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD
		}
	}) 
		
	transporter.sendMail(mailDetails, function(error, data){
		if(error){
			console.log("Error Occurs", error)
		} else{
			console.log("Email sent!!!!", data)
		}
	})
}

const mailDetails = {
	from: 'ammadu.gulla@gmail.com',
	to: 'srilakshmigulla576@gmail.com',
	cc: 'srilakshmigulla576@gmail.com',
	bcc: 'srilakshmigulla576@gmail.com',
	subject: 'Testing and Testing',
	html: {path: './VaccNodemailer.html'}
	// attachments: [
	// 	{   // file on disk as an attachment
	//         filename: 'VaccNodemailer.html',
	//         path: './VaccNodemailer.html' // stream this file
	//     }
	// ]
}
sendMail(mailDetails)