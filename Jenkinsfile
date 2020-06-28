node {
    stage('Clone') {
        echo 'Clone Frontend'
        git 'https://github.com/Logik-Dev/angular-dockerized'
    }
    stage('Install') {
        echo 'Install angular cli'
        sh 'npm install @angular/cli'
    }
    stage('Build') {
        echo 'Build FrontEnd'
        sh 'ng build --prod=true'

    }
}
