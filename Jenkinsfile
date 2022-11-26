pipeline {
  agent { ecs { inheritFrom 'base' } }
  tools { nodejs 'node' }
  stages {
    stage('Install') {
      steps {
        yarn install
      }
    }
    stage('Build') {
      steps {
        yarn prepare
      }
    }
    stage('Test') {
      steps {
        yarn preversion
        yarn test
      }
    }
    stage('Publish') {
      steps {
        nodejs(configId: 'npmrc-publish', nodeJSInstallationName: 'node16') {
        npm ls -l
        }
      }
    }
  }
}
