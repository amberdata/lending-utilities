pipeline {
  agent {
    ecs {
      inheritFrom 'base'
    }
  }
  tools {
    nodejs 'node'
  }
  stages {
     stage('Install') {
      steps {
        sh "yarn install"
      }
    }
     stage('Build') {
      steps {
        sh "yarn build"
      }
    }
     stage('Test') {
      steps {
        sh "yarn preversion"
      }
    }
  }
}

