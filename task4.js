var totalMarks = (300);
var marksEnglish = prompt("Enter your Marks In English?");
var marksMath = prompt("Enter your Marks In Math?");
var marksUrdu = prompt("Enter your Marks In Urdu?");
var marksObtain = parseInt(marksEnglish) + parseInt(marksMath) + parseInt(marksUrdu);
var percentage = parseFloat(marksObtain) * parseFloat(100) / parseFloat(300);
var remarks = (percentage);


document.write("Total Marks: " + totalMarks  + "<br/>");
document.write("Marks Obtain: " + marksObtain + "<br/>");
document.write("Percentage: " + percentage + "%" + "<br/>");
document.write("Grade: ");
if (percentage >= 80)
    {document.write("A-one")
}
    else if (percentage >= 70)
    { document.write("A")
}
else if (percentage >= 60)
    { document.write("B")
}
else if (percentage < 60 )
    { document.write("Fail")
} 
document.write("<br/>" + "Remarks: ");
if (percentage >= 80)
    {document.write("Excellent")
}
    else if (percentage >= 70)
    { document.write("Good")
}
else if (percentage >= 60)
    { document.write("You Need to Improve")
}
else if (percentage < 60 )
    { document.write("Sorry")
}