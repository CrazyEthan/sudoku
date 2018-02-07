//工具方法集
/**
 * 矩阵和数组相关工具
 */
const MatrixToolkit = {
    makeRow(v = 0) {
        const array = new Array(9);
        array.fill(v);
        return array;
    },

    makeMatrix(v = 0) {
        return Array.from({length: 9}, () => this.makeRow(v));
    },

    //Fisher-Yater洗牌算法
    shuffle(array) {
        const endIndex = array.length - 2;
        for (let i = 0; i <= endIndex; i++) {
            const j = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
};

/**
 * 宫坐标系工具
 */
const boxToolkit = {

};

//工具集

module.exports = class Toolkit{
    /**
     * 矩阵和数组相关工具
     */
    static get matrix(){
        return MatrixToolkit;
    }

    /**
     * 宫坐标系工具
     */
    static get box(){
        return boxToolkit;
    }
}