using System;
using System.Collections.Generic;

namespace doughnut_decision_helper.Models
{
    public class DoughnutHelperDto
    {

        public string playerName { get; set; } = null!;

        public List<Game> decisions { get; set; } = null!;
    }

    public class Game
    {
        public string question { get; set; }
        public bool choice { get; set; }
    }
}

