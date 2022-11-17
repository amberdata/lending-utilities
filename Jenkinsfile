pipeline {
  agent { ecs { inheritFrom 'base' } }
  tools { nodejs 'node' }
  stages {
    stage('Install') {
      steps {
        sh "yarn install"
      }
    }
    stage('Build') {
      steps {
        sh "yarn prepare"
      }
    }
    stage('Test') {
      steps {
        sh """
          yarn preversion
          yarn test
        """
      }
    }
  }
}
