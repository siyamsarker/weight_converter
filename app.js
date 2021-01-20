
document.getElementById('unitInput').addEventListener('input', function(e){

    let unitType = document.getElementById('unitInput').value;

    if (unitType == "type_pound") 
        {
            document.getElementById("valueInput").placeholder = "Enter value in pound formet ..";
        }
    else if (unitType == "type_gram")
            {
                document.getElementById("valueInput").placeholder = "Enter value in gram formet ..";
            }
    else if (unitType == "type_kilogram")
            {
                document.getElementById("valueInput").placeholder = "Enter value in kilogram formet ..";
            }
    else if (unitType == "type_ounce")
            {
                document.getElementById("valueInput").placeholder = "Enter value in ounce formet ..";
            }
    else if (unitType == "type_milligram")
            {
                document.getElementById("valueInput").placeholder = "Enter value in milligram formet ..";
            }
    else
    {
        document.getElementById("valueInput").placeholder = "Enter value ..";
    }

});

document.getElementById('valueInput').addEventListener('input',function(e) {

    let unitType = document.getElementById('unitInput').value;

    if (unitType != "0") {

        let data = e.target.value;

        if(unitType == "type_pound")
        {
            if(data == null || data <= 0)
            {
                document.getElementById('output').style.display = 'none';
            } 
            else 
            {
                document.getElementById('output').style.display = 'block';

                document.getElementById('titleOne').innerHTML = "Gram:";              
                document.getElementById('outputOne').innerHTML = data/0.0022046;

                document.getElementById('titleTwo').innerHTML = "Kilogram:";
                document.getElementById('outputTwo').innerHTML = data/2.2046;

                document.getElementById('titleThree').innerHTML = "Ounce:";
                document.getElementById('outputThree').innerHTML = data*16;

                document.getElementById('titleFour').innerHTML = "Milligram:";
                document.getElementById('outputFour').innerHTML = data*453592;
            }
        }

        if(unitType == "type_gram")
        {
            if(data == null || data <= 0)
            {
                document.getElementById('output').style.display = 'none';
            } 
            else 
            {
                document.getElementById('output').style.display = 'block';

                document.getElementById('titleOne').innerHTML = "Pound:";              
                document.getElementById('outputOne').innerHTML = data/453.59237;

                document.getElementById('titleTwo').innerHTML = "Kilogram:";
                document.getElementById('outputTwo').innerHTML = data/1000;

                document.getElementById('titleThree').innerHTML = "Ounce:";
                document.getElementById('outputThree').innerHTML = data/28.35;
                
                document.getElementById('titleFour').innerHTML = "Milligram:";
                document.getElementById('outputFour').innerHTML = data*1000;
            }
        }

        if(unitType == "type_kilogram")
        {
            if(data == null || data <= 0)
            {
                document.getElementById('output').style.display = 'none';
            } 
            else 
            {
                document.getElementById('output').style.display = 'block';

                document.getElementById('titleOne').innerHTML = "Pound:";              
                document.getElementById('outputOne').innerHTML = data*2.205;

                document.getElementById('titleTwo').innerHTML = "Gram:";
                document.getElementById('outputTwo').innerHTML = data*1000;

                document.getElementById('titleThree').innerHTML = "Ounce:";
                document.getElementById('outputThree').innerHTML = data*35.274;
                
                document.getElementById('titleFour').innerHTML = "Milligram:";
                document.getElementById('outputFour').innerHTML = data*1000000;
            }
        }

        if(unitType == "type_ounce")
        {
            if(data == null || data <= 0)
            {
                document.getElementById('output').style.display = 'none';
            } 
            else 
            {
                document.getElementById('output').style.display = 'block';

                document.getElementById('titleOne').innerHTML = "Pound:";              
                document.getElementById('outputOne').innerHTML = data/16;

                document.getElementById('titleTwo').innerHTML = "Gram:";
                document.getElementById('outputTwo').innerHTML = data*28.35;

                document.getElementById('titleThree').innerHTML = "Kilogram:";
                document.getElementById('outputThree').innerHTML = data/35.274;
                
                document.getElementById('titleFour').innerHTML = "Milligram:";
                document.getElementById('outputFour').innerHTML = data*28350;
            }
        }

        if(unitType == "type_milligram")
        {
            if(data == null || data <= 0)
            {
                document.getElementById('output').style.display = 'none';
            } 
            else 
            {
                document.getElementById('output').style.display = 'block';

                document.getElementById('titleOne').innerHTML = "Pound:";              
                document.getElementById('outputOne').innerHTML = data/453592;

                document.getElementById('titleTwo').innerHTML = "Gram:";
                document.getElementById('outputTwo').innerHTML = data/1000;

                document.getElementById('titleThree').innerHTML = "Kilogram:";
                document.getElementById('outputThree').innerHTML = data/1000000;
                
                document.getElementById('titleFour').innerHTML = "Ounce:";
                document.getElementById('outputFour').innerHTML = data/28350;
            }
        }
        
    } else {
        alert("Please select unit Type first.");
        e.target.value = "";
    }

});