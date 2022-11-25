pipeline {
  agent { ecs { inheritFrom 'base' } }
  stages {
    stage('Install') {
      steps {
        yarn 'install'
      }
    }
    stage('Build') {
      steps {
        yarn command: 'prepare'
      }
    }
    stage('Test') {
      steps {
        yarn command: 'preversion'
        yarn command: 'test'
      }
    }
    stage('Publish') {
      steps {
        withNPMWrapper(credentialsId: 'nexus-npm', yarnEnabled: false) {
          npm command: 'publish'
        }
      }
    }
  }
}
