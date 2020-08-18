export PS1="\W \$"
export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_261, x86_64`
export PATH=$PATH:/Users/huseyinnurbaki/tools/sonar-scanner-4.4.0.2170-macosx/bin
export PATH=$PATH:/Users/huseyinnurbaki/tools/sonar-scanner-msbuild-4.10.0.19059-net46/sonar-scanner-4.4.0.2170/bin
export PATH=$PATH:/Users/huseyinnurbaki/tools/sonar-scanner-msbuild-4.10.0.19059-net46
export PATH=$PATH:/usr/bin
export PATH=$PATH:/usr/local/bin
export PATH=$PATH:/Users/huseyinnurbaki/tools/xcpretty/bin
export PATH=${PATH}:/opt/local/bin
export PATH=${PATH}:/Library/Developer/CommandLineTools
export PATH=${PATH}:/Users/huseyinnurbaki/Library/Android/sdk/platform-tools
export PATH=$PATH:$HOME/.npm-global/bin

alias k='kubectl'
alias i='istioctl'
alias d='docker'
alias gb='./gradlew build'
alias gcb='./gradlew clean build'
alias c='clear'
alias gush='git push'
alias gull='git pull'
alias gc='git clone'
alias dull='docker pull'
alias dill='docker kill'
alias dim='docker images'
alias lgp=lazygitpush
alias mybash='code  ~/.bash_profile '
alias notes='code  ~/dev/hus/notes'
alias savemb='source ~/.bash_profile'
alias kgp='k get po'
alias kgs='k get svc'
alias runsonarios='/Users/huseyinnurbaki/run-sonar-swift.sh'

lazygitpush() {
    git add .
    git commit -m "$*"
    git push
}

dkn() {
    d rm -f $(d container ls --last $1)
}


md () {
 mkdir -p $1
 cd $1
}


export PS1="\W \$"
// hides username etc in terminal