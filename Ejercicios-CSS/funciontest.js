var res=new Array;
var no=new Array;
var tures=new Array;
var explicares=new Array;
var calif=0;

res[1]="a";//res = respuesta
res[2]="a";
res[3]="c";
res[4]="b";
res[5]="a";

explicares[1]="Mal,la respuesta correcta es a";
explicares[2]="Mal,la respuesta correcta es a";
explicares[3]="Mal,la respuesta correcta es c";
explicares[4]="Mal,la respuesta correcta es b";
explicares[5]="Mal,la respuesta correcta es a";

function Resp(question,answer){
    tures[question]=answer;
}
function Score(){
    var answertext="RESULTADOS\n";
    calif=0;
    for(i=1;i<=5;i++){
        answertext=answertext+"\nPregunta"+i+".";
        if(res[i]!==tures[i]){
            answertext=answertext+explicares[i]+"\n";
        }
        else{
            answertext=answertext+"Correcto\n";
            calif++;
        }}
    answertext=answertext+"\nCantidad de respuestas acertadas:"+calif;
    answertext=answertext+"\nDiagnostico: ";
    if(calif===0){
        answertext=answertext+"Mal";
    }
    if(calif>=1&&calif<=2){
        answertext=answertext+"Regular";
    }
    if(calif>=3&&calif<=4){
        answertext=answertext+"Bueno";
    }
    if(calif>=5){
        answertext=answertext+"Excelente";
    }
    alert(answertext);}




