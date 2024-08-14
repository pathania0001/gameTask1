let cells = document.querySelectorAll('.cell');
//console.log(cells.addEventListener());
//console.log(location);
let isPrevText = "";
let res=[[0,1,18.4],[3,4,50],[6,7,81.7],[0,3,18.1],[1,4,50],[2,5,81.8],[0,4,45],[2,4,315]];
let count=0;
let isVisited=[false,false,false,false,false,false,false,false,false];
let isWin=false;
const getTextColor=function(positions)
{
     positions.forEach((item)=>{
        cells[item].style.color="#ff9b00ab";
     })
}
const resetGame = function(){
    // Refresh the page
    
       location.reload();

}

let checkWin= function(){

   
    let valuesInCell=Array.from(cells,(item)=>{
        return item.innerText;
    })
      
       res.forEach(value =>{
        let diff=value[1]-value[0];
        if(valuesInCell[value[0]]===valuesInCell[value[1]]&&valuesInCell[value[1]]===valuesInCell[value[1]+diff]&&valuesInCell[value[0]]!="")
        {    

            getTextColor([value[0],value[1],value[1]+diff]);
            let line=document.querySelectorAll(".top-container");
            line[0].style.zIndex="+1";
            line[0].style.width="360px"
            if(diff==1){
             line[0].style.borderTop="1px solid #ff9b00ab";
             line[0].style.top= `${value[2]}%`;
           }
           else if(diff==3)
           {

            line[0].style.height="385px"
            line[0].style.borderLeft="1px solid #ff9b00ab";
            line[0].style.left= `${value[2]}%`;
           }
           
           else if(diff==4)
           {
            line[0].style.width="530px"
            line[0].style.borderTop="2px solid #ff9b00ab";
            line[0].style.transform = "rotate(45deg)";
            line[0].style.right= "27.5%";
            line[0].style.top= "35%";
           }
           else{
            line[0].style.width="535px"
            line[0].style.borderTop="2px solid #ff9b00ab";
            line[0].style.transform = "rotate(315deg)";
            line[0].style.left= "27%";
            line[0].style.bottom= "-36%";
           }

            alert(`${valuesInCell[value[0]]} wins!`);
            cells.forEach(cell => {
              cell.classList.add("disabled");
            });
            isWin=true;

        }  
    
       
       })
       if(!isWin&&count==9)
        {   alert("It's a draw!");
           resetGame();
           return;
        } 

   

     }


// let hoverCells = document.querySelectorAll('.hover-cell');

cells.forEach(function(cell) {
       
        cell.addEventListener('click', function() {  
          // console.log(cell);
          let cellId=cell.getAttribute('id');
          // console.log(cellId);
           isVisited[Number(cellId[4])-1]=true;
            let innerText=this.innerText;
            count++;
            this.classList.remove('hover-Class');
            if(innerText=="") {
                   if(isPrevText==="") {
                    this.innerText="X";
                    // xes.push(this.id.slice(4,5));
                    //console.log(xes)
                        isPrevText="X";
                        return;
                   }
                   else if(isPrevText==="X") {
                    this.innerText="O";
                  //  zeroes.push(this.id.slice(4,5));
                    //console.log("Zeroes",zeroes)
                        count>=5 ? checkWin():false;
                        isPrevText="O";
                        return;
                   }
                   else 
                   {
                    this.innerText = "X";
                    //xes.push(this.id.slice(4,5));
                    //console.log("Xes",xes)
                    count>=5 ? checkWin():false;
                    isPrevText="X";
                    return;  
                   }
            }
                
        });
        
     
    });


    
cells.forEach(function(cell) {
    cell.addEventListener('mouseenter', function() {
      let cellId=cell.getAttribute('id');
      // console.log(cellId);
       if(!isVisited[Number(cellId[4])-1]){
      if (isPrevText == ""||isPrevText == "O") {
        let imgText=this.querySelector(".Xhovered");
        imgText.style.display="block";
        imgText.style.zIndex="+10";
      }
      
      else {
        let imgText=this.querySelector(".Ohovered");
        imgText.style.display="block";
        imgText.style.zIndex="+10";
      }
    }
    });

    cell.addEventListener('mouseout', function() {
      let cellId=cell.getAttribute('id');
      // console.log(cellId);
       if(!isVisited[Number(cellId[4])-1]){

        if (isPrevText === ""|| isPrevText === "O") {
          {
            let imgText=this.querySelector(".Xhovered");
            imgText.style.display="none";
            imgText.style.zIndex="-3";
          }
        }else {
            let imgText=this.querySelector(".Ohovered");
            imgText.style.display="none";
            imgText.style.zIndex="-3";
        }
      }
      });
    
    });
  

  
  


let button_reset = document.querySelector(".reset-btn");

button_reset.addEventListener('click', function() {
    resetGame();
}); 
let button_newgame = document.querySelector(".new-game");

button_newgame.addEventListener('click', function() {
    resetGame();
}); 

