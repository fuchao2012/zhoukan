#!/usr/bin

mkdir -p fex.baidu.com/fex-weekly-$1 && cd $_
touch README.md
echo '* [第'$1'期](./fex.baidu.com/fex-weekly-'$1'/README.md)' >> ../../README.md