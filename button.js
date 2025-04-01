

        function validateform()
        {
            if(document.getElementById("name").value=="")
            {
                alert("Please enter Name");
                return false;
                document.getElementById("name").text=="om";
            }
            if(document.getElementById("age").value=="")
            {
                alert("Please enter your age");
                return false;
            }
            if(document.getElementById("mail").value=="")
            {
                alert("Please provide your Email ID");
                return false;
            }
            if(document.getElementById("ph").value=="")
            {
                alert("Please enter your phone number");
                return false;
            }
            if(document.getElementById("adress").value=="")
            {
                alert("Please enter adress");
                return false;
            }
        }