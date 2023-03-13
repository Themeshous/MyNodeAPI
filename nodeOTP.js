const { Auth , LoginCredentials } = require ('two-step-auth');

async function login(emailId) {
    try {
      const res = await Auth(emailId, "KYO Company");
      console.log(res);
      console.log(res.mail);
      console.log(res.OTP);
      console.log(res.success);
    } catch (error) {
      console.log(error);
    }
  }


// This should have less secure apps enabled
LoginCredentials.mailID = "email"; 
LoginCredentials.password = "email"; 
LoginCredentials.use = true;
  
// Pass in the mail ID you need to verify
login("emailyou want to send ");

