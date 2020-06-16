require('dotenv').config()

const nodemailer = require("nodemailer")

//Step 1

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD
	}
}) 

//Step 2
let mailOptions = {
	from: 'ammadu.gulla@gmail.com',
	to: 'srilakshmigulla576@gmail.com, srinivas.aleti03@gmail.com',
	cc: 'srilakshmigulla576@gmail.com',
	bcc: 'srilakshmigulla576@gmail.com',
	subject: 'Testing and Testing',
	text: 'IT Works'
}

//Step 3
transporter.sendMail(mailOptions, function(error, data){
	if(error){
		console.log("Error Occurs", error)
	} else{
		console.log("Email sent!!!!", data)
	}
})