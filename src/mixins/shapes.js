module.exports = {
    methods: {
        square(num) {
            switch(num) {
                case 0  : return [[0, 0], [1, 0], [0, 1], [1, 1]]; break;
                case 180: return [[0, 0], [1, 0], [0, 1], [1, 1]]; break;
                case 90 : return [[0, 0], [1, 0], [0, 1], [1, 1]]; break;
                case 270: return [[0, 0], [1, 0], [0, 1], [1, 1]]; break;
            }
        },
        l(num) {
            switch(num) {
                case 0  : return [[0, 0], [0, 1], [0, 2], [1, 2]]; break;
                case 90 : return [[0, 0], [1, 0], [2, 0], [0, 1]]; break;
                case 180: return [[0, 0], [1, 0], [1, 1], [1, 2]]; break;
                case 270: return [[0, 1], [1, 1], [2, 1], [2, 0]]; break;
            }
        },
        line(num) {
            switch(num) {
                case 0  : return [[0, 0], [0, 1], [0, 2], [0, 3]]; break;
                case 90 : return [[0, 0], [1, 0], [2, 0], [3, 0]]; break;
                case 180: return [[0, 0], [0, 1], [0, 2], [0, 3]]; break;
                case 270: return [[0, 0], [1, 0], [2, 0], [3, 0]]; break;
            }
        },
        j(num) {
            switch(num) {
                case 0  : return [[1, 0], [1, 1], [1, 2], [0, 2]]; break;
                case 90 : return [[2, 1], [1, 1], [0, 1], [0, 0]]; break;
                case 180: return [[0, 2], [0, 1], [0, 0], [1, 0]]; break;
                case 270: return [[0, 0], [1, 0], [2, 0], [2, 1]]; break;
            }
        },
        s(num) {
            switch(num) {
                case 0  : return [[0, 0], [0, 1], [1, 1], [1, 2]]; break;
                case 90 : return [[2, 0], [1, 0], [1, 1], [0, 1]]; break;
                case 180: return [[0, 0], [0, 1], [1, 1], [1, 2]]; break;
                case 270: return [[2, 0], [1, 0], [1, 1], [0, 1]]; break;
            }
        },
        t(num) {
            switch(num) {
                case 0  : return [[1, 0], [0, 1], [1, 1], [2, 1]]; break;
                case 90 : return [[1, 1], [0, 0], [0, 1], [0, 2]]; break;
                case 180: return [[1, 1], [0, 0], [1, 0], [2, 0]]; break;
                case 270: return [[0, 1], [1, 0], [1, 1], [1, 2]]; break;
            }
        },
        z(num) {
            switch(num) {
                case 0  : return [[0, 0], [1, 0], [1, 1], [2, 1]]; break;
                case 90 : return [[1, 0], [1, 1], [0, 1], [0, 2]]; break;
                case 180: return [[0, 0], [1, 0], [1, 1], [2, 1]]; break;
                case 270: return [[1, 0], [1, 1], [0, 1], [0, 2]]; break;
            }
        },
        randomShape() {

            var shapeNum = this.getRandomInt(1, 8)
            var orientNum = this.getRandomInt(0, 4)
            var orients = [0, 90, 180, 270]
            var shapes = [null, 'square', 'l', 'line', 'j', 's', 't', 'z']

            switch(shapeNum) {
                case 1: return this.square(orients[orientNum]); break;
                case 2: return this.l(orients[orientNum]); break;
                case 3: return this.line(orients[orientNum]); break;
                case 4: return this.j(orients[orientNum]); break;
                case 5: return this.s(orients[orientNum]); break;
                case 6: return this.t(orients[orientNum]); break;
                case 7: return this.z(orients[orientNum]); break;
            }
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
    }
};
