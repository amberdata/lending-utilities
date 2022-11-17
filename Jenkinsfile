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
     stage('Build') {
      steps {
        sh "yarn build"
      }
    }
     stage('Test') {
      steps {
        sh """
          yarn lint
          yarn Test
        """
      }
    }
  }
}
