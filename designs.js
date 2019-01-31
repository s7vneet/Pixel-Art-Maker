$(document).ready(function(){

    // Select color input
    // Select size input
    
    let color = $("#colorPicker");
    
    var in_height = $("#inputHeight");
    var in_width = $("#inputWeight");
    
    
    const table = document.getElementById('pixelCanvas');
    
    
    $("#inputSubmit").click(function (sub) {
        
        sub.preventDefault();
        makeGrid();
        
    });
    
    // When size is submitted by the user, call makeGrid()
    function makeGrid() {
    
        table.innerHTML = '';
        
        let p = in_height.val();
        
        let q = in_width.val();
    
        let Color_add = function (cell) {
            
            cell.addEventListener('click', function () {
            cell.style.backgroundColor = color.val();
                
            });
        }
        
    
        for (let i = 0; i < p; ++i) {
            
            let row = table.insertRow(i);
            
            for (var j = 0; j < q; ++j) {
                
                let box = row.insertCell(j);
                
                box.addEventListener('click', Color_add(box));
            }
        }
    }
        
    }); 