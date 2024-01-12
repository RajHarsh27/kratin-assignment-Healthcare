
      var addTimers = document.getElementsByClassName("nextDoseTime");
      var setInitialTime = new Date().getTime();
      const offset = 100000;
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = setInitialTime + offset + 5 * 1000000 - now;
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        addTimers[0].innerHTML =
          hours + "h " + minutes + "m " + seconds + "s Remaining";
        addTimers[1].innerHTML =
          hours * 3 + "h " + minutes / 2 + "m " + seconds + "s Remaining";
        addTimers[2].innerHTML =
          hours * 5 + "h " + minutes * 2 + "m " + seconds + "s Remaining";
      }, 1000);

      var addRemainingDays = document.getElementsByClassName("RemainingDoses");
      var dt = new Date();
      var currMonthNo = dt.getMonth();

      var month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "October",
        "Nov",
        "Dec",
      ];
      document.getElementById("remMonth").innerHTML +=
        "[" + month[currMonthNo] + "]";

      for (var i = 0; i < addRemainingDays.length; i++) {
        var d = new Date(2022, currMonthNo + 1, 0);
        var monthTotal = d.getDate();
        var currentDate = new Date().getDate();
        console.log(monthTotal - currentDate);
        addRemainingDays[i].innerHTML = monthTotal - currentDate;
      }
