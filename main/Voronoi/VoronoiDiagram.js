class VoronoiDiagram{
    #poisson;
    #spaceMax;
    #spaceMin;
    #canvasWidth;
    #canvasHeight;
    #voronoiCells = [];

    setPoisson(poisson){
        this.#poisson = poisson;
    }

    setSpace(min, max){
        this.#spaceMin = min;
        this.#spaceMax = max;
    }

    createDiagram(canvas){
        DrawUtils.initialization(canvas);
        this.#clear();
        this.#setCanvasDimensions(canvas);
        this.#poisson.createPoints();
        this.#createCells();
        this.#confrontAreas();
        this.#createSpaces();
        this.#draw();
    }

    #clear(){
        DrawUtils.clear();
        this.#poisson.clear();
        this.#voronoiCells = [];
    }

    #setCanvasDimensions(canvas){
        this.#canvasWidth = canvas.width;
        this.#canvasHeight = canvas.height;
        this.#poisson.setDimensions(canvas.width, canvas.height);
    }

    #createCells(){
        for(let i = 0; i < this.#poisson.getPoints().length; i++){
            let voronoiCell = this.#getNewCell(i);
            this.#voronoiCells.push(voronoiCell);
        }
    }

    #confrontAreas(){
        for(let i = 0; i < this.#voronoiCells.length -1; i ++){
            for(let j = i+1; j < this.#voronoiCells.length; j++){
                let voronoiCell1 = this.#voronoiCells[i];
                let voronoiCell2 = this.#voronoiCells[j];
                voronoiCell1.allocateArea(voronoiCell2);
            }
        }
    }

    #createSpaces(){
        for(let i = 0; i < this.#voronoiCells.length; i ++){
            let voronoiCell = this.#voronoiCells[i];
            let space = MathUtils.getRandomInt(this.#spaceMin, this.#spaceMax);
            voronoiCell.createSpaces(space);
        }
    }

    #draw(){
        for(let i = 0; i < this.#voronoiCells.length; i++){
            let voronoiCell = this.#voronoiCells[i];
            for(let j = 0; j < voronoiCell.getVertices().length; j++){
                let k = j + 1;
                if(k == voronoiCell.getVertices().length)
                    k = 0;
                let vertice1 = voronoiCell.getVertices()[j];
                let vertice2 = voronoiCell.getVertices()[k];
                DrawUtils.drawLine(vertice1, vertice2);
            }
        }
    }

    #getNewCell(i){
        let x = Math.round(this.#poisson.getPoints()[i].getX());
        let y =  Math.round(this.#poisson.getPoints()[i].getY());
        let voronoiCenter = new Point(x, y);
        let voroniCell = new VoronoiCell(voronoiCenter);
        const addSize = DimensionContants.ADDITIONAL_CANVAS_SIZE;
        voroniCell.addVertice(new Point(-1 * addSize, -1 * addSize));
        voroniCell.addVertice(new Point(this.#canvasWidth + addSize, -1 * addSize));
        voroniCell.addVertice(new Point(this.#canvasWidth + addSize, this.#canvasHeight + addSize));
        voroniCell.addVertice(new Point(-1 * addSize, this.#canvasHeight + addSize));
        return voroniCell;
    }
}