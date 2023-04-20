//your JS code here. If required.
 window.onload = function() {
      var browserInfoDiv = document.getElementById('browser-info');
      var browserName = '';
      var version = '';
      
      // Detect browser name and version
      if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
          browserName = 'Opera';
          version = navigator.userAgent.match(/(OPR\/)[0-9\.]+/)[0].split('/')[1];
      }
      else if(navigator.userAgent.indexOf("Edge") != -1 ) {
          browserName = 'Microsoft Edge';
          version = navigator.userAgent.match(/(Edge\/)[0-9\.]+/)[0].split('/')[1];
      }
      else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
          browserName = 'Google Chrome';
          version = navigator.userAgent.match(/(Chrome\/)[0-9\.]+/)[0].split('/')[1];
      }
      else if(navigator.userAgent.indexOf("Safari") != -1) {
          browserName = 'Safari';
          version = navigator.userAgent.match(/(Version\/)[0-9\.]+/)[0].split('/')[1];
      }
      else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
          browserName = 'Mozilla Firefox';
          version = navigator.userAgent.match(/(Firefox\/)[0-9\.]+/)[0].split('/')[1];
      }
      else {
          browserName = 'Unknown Browser';
          version = 'N/A';
      }
      
      // Display browser information
      browserInfoDiv.innerHTML = "You are using " + browserName + " version " + version;
    }