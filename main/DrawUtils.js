class DrawUtils{
    
    static #canvas;
    static #context

    static initialization(canvas){
        DrawUtils.#canvas = canvas;
        DrawUtils.#context = canvas.getContext("2d");
    }

    static clear(){
        let height = DrawUtils.#canvas.height;
        let width = DrawUtils.#canvas.width;
        DrawUtils.#context.clearRect(0, 0, width, height);
    }

    static drawLine(point1, point2){
        let x1 = point1.getX();
        let y1 = point1.getY();
        let x2 = point2.getX();
        let y2 = point2.getY();
        DrawUtils.#context.moveTo(x1, y1);
        DrawUtils.#context.lineTo(x2, y2);
        DrawUtils.#context.stroke();
        DrawUtils.#context.beginPath();
    }
}