// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
describe('multiply Array', function(){
    it('should multiply array by a given number', function(){
        var array = [3]
        var multiplier = 2
        var result = multiplyAll(array, multiplier)
        console.log(result)
        expect(result).toEqual([6])
    })
    it('should take any array of 2 length and multiply by the given number', function(){
        var array = [3, 4]
        var multiplier = 2
        var result = multiplyAll(array, multiplier)
        console.log(result)
        expect(result).toEqual([6,8])
    })
    it('must return answer as an array', function(){
        var array = [3, 4]
        var multiplier = 2
        var result = multiplyAll(array, multiplier)
        console.log(result)
        expect(result).toEqual([6,8])
    })
    it('must return an empty array if input is []', function(){
        var array = []
        var multiplier = 2
        console.log(result)
        var result = multiplyAll(array, multiplier)
        expect(result).toEqual([])
    })
})