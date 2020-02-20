document.getElementById('display').onclick=sign;

function sign(){
  var dropdown = document.getElementById("zodiac");
  var month = dropdown.options[dropdown.selectedIndex].value;
  // console.log(typeof month)
  var daydropdown = document.getElementById("date");
  var day= daydropdown.options[daydropdown.selectedIndex].value;
  // console.log(day)

  if (month == 1) {
    if (day==1 || day<=19){
      document.getElementById("sign").innerHTML="Capicorn- If there are some things you really need to care of, you can still make plans for leisure or recreation afterward.";
      // document.getElementById("photo").src="image/capicorn.jpg";

    }else if (day>= 20 && day<= 31){
      document.getElementById("sign").innerHTML="Aquarius - Open your door and your heart if the situation arises.";
    }
  }

if (month == 2) {
  if (day=== 1 || day <= 18){
    document.getElementById("sign").innerHTML="Acquarias - Open your door and your heart if the situation arises.";
  }else if (day>=19 && day<=29){
    document.getElementById("sign").innerHTML="Pices - Talk things over and everything will work out just fine.";
  }
}

if (month == 3){
  if (day=== 1 || day <=20){
    document.getElementById("sign").innerHTML="Pices - Talk things over and everything will work out just fine.";
  }else if (day>=21 && day<=31){
    document.getElementById("sign").innerHTML="Aries - Remember to express your gratitude for this supportive relationship.";
  }
}

if (month==4){
  if (day===1 || day <=19){
    document.getElementById("sign").innerHTML="Aries - Remember to express your gratitude for this supportive relationship.";
  } else if (day >=20 && day <=30){
    document.getElementById("sign").innerHTML="Taurus - Don't fall into the poor me trap today, Taurus. ";
  }
}
if  (month==5){
  if (day===1 || day <=20){
    document.getElementById("sign").innerHTML="Taurus - Don't fall into the poor me trap today, Taurus. ";
  }else if (day >= 21 && day <=31){
    document.getElementById("sign").innerHTML="Gemini - Your nature is one that thrives on intense thought, creativity, sexuality, and emotion. ";
  }
}
if (month==6){
  if(day===1 || day <=20){
    document.getElementById("sign").innerHTML="Gemini - Your nature is one that thrives on intense thought, creativity, sexuality, and emotion. ";
  }else if (day >=21 && day <=30){
    document.getElementById("sign").innerHTML="Cancer - Take time to express yourself through your favorite hobbies today.";
  }

}
if (month==7){
  if(day===1 || day <=21){
    document.getElementById("sign").innerHTML="Cancer - Take time to express yourself through your favorite hobbies today.";
  }else if (day >=22 && day <=31){
    document.getElementById("sign").innerHTML="Leo - Even a simple greeting card can really brighten someone's day.";
  }
}
if (month==8){
  if (day===1 || day<=23){
    document.getElementById("sign").innerHTML="Leo - Even a simple greeting card can really brighten someone's day.";
  }else if (day>=24 && day <=31){
    document.getElementById("sign").innerHTML="Virgo - Pull out your favorite craft supplies and have some fun exploring color and design. ";
  }
}
if (month==9){
  if(day===1 || day <=22){
    document.getElementById("sign").innerHTML="Virgo - Pull out your favorite craft supplies and have some fun exploring color and design. ";
  }else if (day>=23 && day <=30){
    document.getElementById("sign").innerHTML="Libra - Libra, put some music on to get yourself going today, especially if you feel a little lonely.";
  }
}
if (month==10){
  if (day===1 || day <=22){
    document.getElementById("sign").innerHTML="Libra - Libra, put some music on to get yourself going today, especially if you feel a little lonely.";
  }else if (day>=23 && day <=31){
    document.getElementById("sign").innerHTML="Scorpio - Keep your budget in the forefront of your mind and head straight to the checkout when you're done.";
  }
}
if (month==11){
  if (day===1 || day <=21){
    document.getElementById("sign").innerHTML="Scorpio - Keep your budget in the forefront of your mind and head straight to the checkout when you're done.";
  }else if (day>=22 && day <=30){
    document.getElementById("sign").innerHTML="Sagittarius - Make the most of this great day to get into both work and play.";
  }
}
if (month==12){
  if (day===1 || day<=21){
    document.getElementById("sign").innerHTML="Sagittarius - Make the most of this great day to get into both work and play.";
  }else if (day>=22 && day <=31){
    document.getElementById("sign").innerHTML="Capicorn - If there are some things you really need to care of, you can still make plans for leisure or recreation afterward.";
    }
  }
}
