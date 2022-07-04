function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("myTable");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}



  function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }