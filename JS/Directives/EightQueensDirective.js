Array.prototype.last = function (item) {
    var arr = this;
    if (arr[arr.length - 1] == null) {
        if (item != null) {
            arr.push(item);
        }
    }
    return arr[arr.length - 1];
}

app.directive("eightQueens", function () {
    return {
        restrict: 'AE',
        templateUrl: 'js/directives/eightqueens.html',
        link: function ($scope, elements, attrs) {
            
        },
        controller: function ($scope) {
            $scope.tiles = [];
            $scope.tilecolors = [];
            $scope.queens = [];
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    $scope.tilecolors.last([]).push((i + j) % 2 == 0 ? 0 : 1);
                    $scope.tiles.last([]).push(0);
                }
                $scope.tilecolors.push([]);
                $scope.tiles.push([]);
            }
            console.log("tile colors", $scope.tilecolors);
            console.log("tiles", $scope.tiles);

            $scope.toggleQueen = function (i, j) {
                if ($scope.tiles[i][j] != 0) $scope.tiles[i][j] = 0;
                else $scope.tiles[i][j] = 1;
                $scope.queens.toggle(i + '-' + j);
                $scope.validate();
            }

            $scope.validate = function () {
                for (var i = 0; i < $scope.queens.length; i++) {
                    var qA = $scope.queens[i].split('-');
                    var queenA = { i: Number(qA[0]), j: Number(qA[1]) }
                    var queenAIsInDanger = false;
                    for (var j = 0; j < $scope.queens.length; j++) {
                        if (i != j) {
                            var qB = $scope.queens[j].split('-');
                            var queenB = { i: Number(qB[0]), j: Number(qB[1]) }
                            if (queenA.i == queenB.i || queenA.j == queenB.j || Math.abs(Math.abs(queenA.i) - Math.abs(queenB.i)) == Math.abs(Math.abs(queenA.j) - Math.abs(queenB.j))) {
                                $scope.tiles[queenA.i][queenA.j] = -1;
                                $scope.tiles[queenB.i][queenB.j] = -1;
                                console.log(queenA, queenB, $scope.queens);
                                queenAIsInDanger = true;
                            }
                        }
                    }
                    if (queenAIsInDanger == false) $scope.tiles[queenA.i][queenA.j] = 1;
                }
            }
        }
    }
});