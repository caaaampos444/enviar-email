const { log } = require('console');
const nodemailer = require('nodemailer');

// Configurar o transporte de e-mail
let transporter = nodemailer.createTransport({
    service: 'gmail', // Pode ser outro serviço como 'hotmail', 'yahoo', etc.
    auth: {
        user: 'noreply.touccan@gmail.com', // Seu e-mail
        pass: 'hsmx ibcb swga ggag'        // Sua senha de e-mail
    }
});

// Função para enviar e-mail
async function enviarEmail(destinatario, assunto, corpo) {
    try {
        let info = await transporter.sendMail({
            from: '"Touccan" <noreply.touccan@gmail.com>', // Remetente
            to: destinatario,                              // Destinatário
            subject: assunto,                              // Assunto
            text: corpo                                    // Corpo do e-mail em texto simples
        });
        console.log('Mensagem enviada!');
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
}

// Uso da função
enviarEmail('gustavock18@gmail.com', 'Recuperação de Senha', 'Aqui está o seu código de recuperação: 123456');