const { log } = require('console');
const nodemailer = require('nodemailer');

// Configurar o transporte de e-mail
let transporter = nodemailer.createTransport({
    service: 'gmail', // Pode ser outro serviço como 'hotmail', 'yahoo', etc.
    auth: {
        //user: 'noreply.touccan@gmail.com', // email do noreply (pra recuperaçao de senha e etc)
        user: 'contato.touccan@gmail.com',   // email do contato (pra enviar emails tipo reclamações)
        //pass: 'hsmx ibcb swga ggag'        // senha do noreply
        pass: 'snbt dqeb rnrj ossm'          // senha do contato
    }
});

// Função para enviar e-mail
async function enviarEmail(destinatario, assunto, corpo) {
    try {
        let info = await transporter.sendMail({
            from: '"Touccan" <contato.touccan@gmail.com>', // Remetente
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
enviarEmail('contato.touccan@gmail.com', '<Nome de quem enviou a denuncia>', '<Conteúdo da denúncia>');
