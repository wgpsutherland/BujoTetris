<template>

    <div class="hello">

        <div id="app">

            <b-navbar variant="info" type="dark">
                <b-navbar-brand href="#">BujoTetris</b-navbar-brand>
            </b-navbar>

            <canvas id="canvas" :width=canvasWidth :height=canvasHeight v-draw="msg"></canvas>

            <div class="container">

                <div class="row">

                    <div class="col-12">

                        <b-form>

                            <div class="row">
                                <div class="col-md-6">
                                    <b-form-group id="dotsInputGroup" label="Horizontal dots in journal:" label-for="dotsInput">
                                        <b-form-select id="dotsInput" v-model.number="dotsHorizontal" class="mb-3">
                                            <option v-for="n in 35" :value="n" :style="{ display: n >= 25 ? 'list-style' : 'none' }">
                                                {{n}}
                                            </option>
                                        </b-form-select>
                                    </b-form-group>  
                                </div>
                                <div class="col-md-6">
                                    <b-form-group label="Orientation:" label-for="orientationInput">
                                        <b-form-radio-group v-model="top"
                                                            id="orientationInput"
                                                            :options="[{ text: 'Top', value: true }, { text: 'Bottom', value: false }]"
                                                            name="radiosMd">
                                        </b-form-radio-group>
                                    </b-form-group>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <b-form-group id="monthInputGroup" :label="'Month: ' + numDays + ' days'" label-for="monthInput">
                                        <b-form-select id="monthInput" v-model.number="month" class="mb-3">
                                            <option v-for="n in 12" :value="n">{{monthNames[n - 1]}}</option>
                                        </b-form-select>
                                    </b-form-group>  
                                </div>

                                <div class="col-md-6">
                                    <b-form-group id="yearInputGroup" label="Year:" label-for="yearInput">
                                        <b-form-select id="yearInput" v-model.number="year" class="mb-3">
                                            <option v-for="n in 4">{{year + n - 2}}</option>
                                        </b-form-select>
                                    </b-form-group>  
                                </div>
                            </div>
                            
                        </b-form>                        

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import shapes from "../mixins/shapes"

export default {

    data () {

        var today = new Date()

        return {
            msg: 'hello',
            dotsVertical: 8,
            dotsHorizontal: 29,
            // squareSize: 20,
            startingPoint: {
                x: 0,
                y: 0
            },
            top: false,
            colours: [0],
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            monthNames: [
                "January", "February", "March", "April", "May", "June","July", 
                "August", "September", "October", "November", "December"
            ]
        }
    },

    computed: {
        gridWidth() {
            return this.dotsHorizontal - 1
        },
        gridHeight() {
            return 8
        },
        grid() {
            return this.initGrid(this.gridHeight, this.gridWidth)
        },
        squareSize() {
            return this.canvasWidth / (this.dotsHorizontal + 1)
        },
        canvasWidth() {
            return 3 * (document.documentElement.clientWidth)  // makes it render nicely without blurring
            // return this.squareSize * (this.dotsHorizontal + 1)
        },
        canvasHeight() {
            return this.squareSize * (this.dotsVertical + 1)
        },
        numDays() {
            var d = new Date(this.year, this.month, 0);
            return d.getDate()
        }
    },

    mixins:[shapes],

    methods: {

        findStartingPoint(grid) {

            for (let i = 0; i < grid.length; i++) {

                for (let j = 0; j < grid[i].length; j++) {

                    if(grid[i][j] == 0) {
                        return {
                            x: j, y: i
                        }
                    }
                }
            }
        },

        shapeFitsGrid(shape, grid) {

            for(let i = 0; i < shape.length; i++) {

                let e = shape[i];

                if(grid[this.startingPoint.y + e[1]]) {

                    if(grid[this.startingPoint.y + e[1]][this.startingPoint.x + e[0]] != 0) {
                        return false
                    }

                } else {
                    return false            
                }
            }

            return true
        },

        emptyGrid(height, width) {

            var grid = []
            
            for (let i = 0; i < height; i++) {

                grid[i] = []

                for (let j = 0; j < width; j++) {
                    grid[i][j] = 0
                }
            }

            return grid;
        },

        tempGrid(grid, shape, i) {

            var c = this.clone(grid)

            shape.forEach((e) => {
                c[this.startingPoint.y + e[1]][this.startingPoint.x + e[0]] = i
            });

            return c;
        },

        initGrid(height, width) {

            var grid = this.emptyGrid(height, width);

            for (let i = 1; i <= this.numDays; i++) {

                this.startingPoint = this.findStartingPoint(grid)

                this.colours[i] = this.getRandomColor()

                var count = 0

                var valid = false

                while(!valid && count < 500) {

                    count++;

                    let shape = this.randomShape()
                    let copyStartingPoint = this.clone(this.startingPoint)

                    if (!this.shapeFitsGrid(shape, grid)) {

                        this.startingPoint.x--;

                        if (!this.shapeFitsGrid(shape, grid)) {

                            this.startingPoint = copyStartingPoint;
                            continue
                        }
                    }

                    var c = this.tempGrid(grid, shape, i);
                    if(this.checkValidPlacement(c)) {
                        grid = c
                        valid = true
                    }

                    this.startingPoint = copyStartingPoint;
                }
            }

            return grid
        },

        clone(obj) {
            return JSON.parse(JSON.stringify(obj))
        },

        getRandomColor() {
            var o = Math.round, r = Math.random, s = 255;
            return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.5 + ')';
        },

        checkValidPlacement(grid) {

            for (let i = 0; i < grid.length; i++) {

                for (let j = 0; j < grid[i].length; j++) {

                    // if 1 empty space is surrounded
                    if (
                        (grid[i][j] == 0) &&
                        ((grid[i-1] == undefined) || grid[i-1][j] != 0) &&
                        ((grid[i] == undefined) || grid[i][j-1] != 0) &&
                        ((grid[i] == undefined) || grid[i][j+1] != 0) &&
                        ((grid[i+1] == undefined) || grid[i+1][j] != 0)
                    ) {
                        return false
                    }

                    // if 2 empty space horizontal are surrounded
                    if (
                        (j < grid[i].length - 1) &&

                        (grid[i][j] == 0) &&
                        (grid[i][j+1] == 0) &&

                        ((grid[i-1] == undefined) || grid[i-1][j] != 0) &&
                        ((grid[i-1] == undefined) || grid[i-1][j+1] != 0) &&

                        ((grid[i] == undefined) || grid[i][j-1] != 0) &&
                        ((grid[i] == undefined) || grid[i][j+2] != 0) &&

                        ((grid[i+1] == undefined) || grid[i+1][j] != 0) &&
                        ((grid[i+1] == undefined) || grid[i+1][j+1] != 0)
                    ) {
                        return false
                    }

                    // if 2 empty space vertical are surrounded
                    if (
                        (i < grid.length - 1) &&

                        (grid[i][j] == 0) &&
                        (grid[i+1][j] == 0) &&

                        ((grid[i-1] == undefined) || grid[i-1][j] != 0) &&
                        ((grid[i+2] == undefined) || grid[i+2][j] != 0) &&

                        ((grid[i] == undefined) || grid[i][j-1] != 0) &&
                        ((grid[i] == undefined) || grid[i][j+1] != 0) &&

                        ((grid[i+1] == undefined) || grid[i+1][j-1] != 0) &&
                        ((grid[i+1] == undefined) || grid[i+1][j+1] != 0)
                    ) {
                        return false
                    }
                }
            }
            return true
        }
    },

    directives: {

        draw(canvasElement, binding, vnode) {
            
            var data = vnode.context

            var ctx = canvasElement.getContext("2d");  // get canvas context
            ctx.clearRect(0, 0, data.canvasWidth, data.canvasHeight);  // clear the canvas

            ctx.fillStyle = "grey";

            for (let i = 0; i < data.dotsHorizontal; i++) {

                ctx.beginPath();

                var x = (i + 1) * data.squareSize

                for (let j = 0; j < data.dotsVertical; j++) {

                    var y = (j + 1) * data.squareSize

                    ctx.arc(x, y, 0.5, 0, Math.PI * 2, true);
                }

                ctx.fill();
            }

            ctx.strokeStyle="black";
            ctx.textBaseline = "top"

            var drawnNumbers = new Set()

            for (let i = 0; i < data.grid.length; i++) {

                var y = data.top ? (i + 1) * data.squareSize : data.canvasHeight - ((i + 2) * data.squareSize)

                for (let j = 0; j < data.grid[i].length; j++) {

                    var x = (j + 1) * data.squareSize
                    var el = data.grid[i][j]

                    if(data.grid[i][j] != 0) {
                        ctx.fillStyle = data.colours[el]
                        ctx.beginPath();
                        ctx.rect(x, y, data.squareSize, data.squareSize);
                        ctx.fill();

                        if(!drawnNumbers.has(el)) {
                            ctx.font= (data.squareSize * 3 / 5) + "px Georgia";
                            ctx.fillText(el, x + 4, y);
                            drawnNumbers.add(el)
                        }
                    }
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

#canvas {
    background-color: ivory;
    width: 100%;
}

</style>
