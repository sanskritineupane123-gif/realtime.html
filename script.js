function validate (e) {
    e.prevent.default();
    const email="getElementById" ('email').value
     const pass="getElementById" ('password').value
      const age="getElementById" ('age').value
       const mssgbox="getElementById" (''mssgbox).value
       let mssg='';

       if (email==''){
        message="enter an email";
    mssgbox.style.colour="red";
       }if (pass==''){
        message="enter password";
    mssgbox.style.colour="red";
       }if (age==''){
        message="enter your age";
    mssgbox.style.colour="red";
       }else{
        message="login succsessful";
        mssgbox.style.colour="green";
       }

       mssgbox.innertext=message;


}