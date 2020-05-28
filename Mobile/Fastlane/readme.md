## ruby installation fail (2.5)

brew ile indirdim daha sonra aşağıdakileri pathe ekledim. 

export PATH="/usr/local/opt/ruby@2.5/bin:$PATH"
sıradaki 2 tanesi compilerların görmesi için
export LDFLAGS="-L/usr/local/opt/ruby@2.5/lib"
export CPPFLAGS="-I/usr/local/opt/ruby@2.5/include"

bu ikisi de fatlane için zorunlu
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
------
