pipeline {
  agent any
  tools {
    nodejs "node"
    }
    
  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         bat 'npm run cypress:run'
      }
    }      
  }
  post {
    success {
      telegramSend 'Go schedule yourself the vaccine!'
    }
    failure {
      telegramSend 'Hello Failure'
    }
  }
}