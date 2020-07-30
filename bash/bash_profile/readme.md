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

dkn() {
    d rm -f $(d container ls --last $1)
}

lazygitpush() {
    git add .
    git commit -m "$*"
    git push
}

dkn() {
    d rm -f $(d container ls --last $1)
}