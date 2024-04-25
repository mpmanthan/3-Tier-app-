pipeline { 
    agent any 
    
    stages {
        stage('Go to Git ') { 
            steps { 
                  //this git repo 
	          checkout scm
            }
        }        
   stages {
        stage('Build') {
            steps {
                  sh 'docker-compose up'
            }
        } 
}
}
