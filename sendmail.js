function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "knivesderaya41@gmail.com",
        Password : "4B8529C04F314B45DA9716CDF7FC79D5A855",
        To : 'knivesderaya41@gmail.com',
        From : "knivesderaya41@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}