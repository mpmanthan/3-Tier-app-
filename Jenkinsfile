pipeline { 
    agent any 
    
    stages {
        stage('Go to Git ') { 
            steps { 
                  //this git repo 
	          checkout scm
            }
        }        
    
        stage('Build') {
            steps {
                  sh 'docker-compose up'
            }
        } 

        stage('Build') {
            steps {
                  sh 'docker exec -it mongo mongoimport --db app --collection doctor --file ./data/package.json'
                  sh 'docker exec -it mongo mongoimport --db app --collection doctor --file ./data/package-lock.json'
          }
        }
}
}
