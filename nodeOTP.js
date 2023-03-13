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
LoginCredentials.mailID = "userroot435@gmail.com"; 
LoginCredentials.password = "RootRoot@22"; 
LoginCredentials.use = true;
  
// Pass in the mail ID you need to verify
login("i.alili@esi-sba.dz");

