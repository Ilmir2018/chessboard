"use strict";

/**
 * @property {htmlElement} gameContainerElement Контейнер игры.
 * @type {{gameContainerEl: HTMLElement | null}}
 */

const chess = {
    gameContainerEl: document.getElementById('chess'),
    figures : [
        //white
        {name: 'p', color: 'w', pos: 'a2'}, //pawn
        {name: 'p', color: 'w', pos: 'b2'}, //castle
        {name: 'p', color: 'w', pos: 'c2'},
        {name: 'p', color: 'w', pos: 'd2'}, //knight
        {name: 'p', color: 'w', pos: 'e2'},
        {name: 'p', color: 'w', pos: 'f2'}, //bishop
        {name: 'p', color: 'w', pos: 'g2'},
        {name: 'p', color: 'w', pos: 'h2'}, //King
        {name: 'R', color: 'w', pos: 'a1'},
        {name: 'N', color: 'w', pos: 'b1'}, //Queen
        {name: 'B', color: 'w', pos: 'c1'},
        {name: 'Q', color: 'w', pos: 'd1'}, //bishop
        {name: 'K', color: 'w', pos: 'e1'},
        {name: 'B', color: 'w', pos: 'f1'}, //knight
        {name: 'N', color: 'w', pos: 'g1'},
        {name: 'R', color: 'w', pos: 'h1'}, //castle

        //black
        {name: 'p', color: 'b', pos: 'a7'}, //pawn
        {name: 'p', color: 'b', pos: 'b7'}, //castle
        {name: 'p', color: 'b', pos: 'c7'},
        {name: 'p', color: 'b', pos: 'd7'}, //knight
        {name: 'p', color: 'b', pos: 'e7'},
        {name: 'p', color: 'b', pos: 'f7'}, //bishop
        {name: 'p', color: 'b', pos: 'g7'},
        {name: 'p', color: 'b', pos: 'h7'}, //King
        {name: 'R', color: 'b', pos: 'a8'},
        {name: 'N', color: 'b', pos: 'b8'}, //Queen
        {name: 'B', color: 'b', pos: 'c8'},
        {name: 'Q', color: 'b', pos: 'd8'}, //bishop
        {name: 'K', color: 'b', pos: 'e8'},
        {name: 'B', color: 'b', pos: 'f8'}, //knight
        {name: 'N', color: 'b', pos: 'g8'},
        {name: 'R', color: 'b', pos: 'h8'}, //castle
    ],
    figureHtml: {
        pw: '&#9817;',
        Rw: '&#9814;',
        Nw: '&#9816;',
        Bw: '&#9815;',
        Qw: '&#9813;',
        Kw: '&#9812;',

        pb: '&#9823;',
        Rb: '&#9820;',
        Nb: '&#9822;',
        Bb: '&#9821;',
        Qb: '&#9819;',
        Kb: '&#9818;',
    },


    renderMap() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);
            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                td.dataset.row = rows[row]; //Делаем дата атрибуты для строк в виде цифр
                td.dataset.col = cols[col]; //Делаем дата атрибуты для колонок в виде букв

                if (rows[row] === 0 && cols[col] !== 0) {
                    td.textContent = cols[col];
                }else if (cols[col] === 0 && rows[row] !== 0){
                    td.textContent = rows[row];
                }
                if (this.isCellBlack(row, col)){
                    td.style.backgroundColor = 'gray';
                }
            }
        }
    },
    /**
     * Определяет является ли ячейка чёрной
     * @param {int} rowNum Номер в строке.
     * @param {int} colNum Номер в колонке.
     * @returns {boolean} true, если ячейка должна быть чёрной, иначе false.
     */
    isCellBlack(rowNum, colNum) {
        if (rowNum === 0 || rowNum === 9 || colNum === 0 || colNum === 9){
            return false;
        }

        return (rowNum % 2 === 0 && colNum % 2 === 1) ||
            (rowNum % 2 === 1 && colNum % 2 === 0);
    },

    /**
     * Метод вставляет шахматные фигуры в нужные ячейки.
     */

    renderFigures() {
        for (const figure of this.figures){ //Пробегаемся по массиву figures доставая все объекты и помеая их в костанту
            //figure
            const col = figure.pos.charAt(0); //Выбираем первую букву из строки pos, объекта figure функцией charAt
            const row = figure.pos.charAt(1); //Выбираем вторую букву из строки pos, объекта figure функцией charAt
            //По дата атрибутам вставляем в нужные ячейки записывая туда код фигуры
            document.querySelector(`[data-col='${col}'][data-row='${row}']`).innerHTML =
                this.figureHtml[figure.name + figure.color];
        }
    }
};
chess.renderMap();
chess.renderFigures();















