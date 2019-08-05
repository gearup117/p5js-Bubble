class EasyCamera{
    constructor(){
        if(mouseIsPressed){

            
            camera(mouseX, mouseY, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);
        }
    }
}
