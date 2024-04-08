import "./App.css";

function App() {
  // USE useState & useEffect to handle the logic for the movie selection

  return (
    <>
      <div className="movie-container">
        <label>Now In Theaters:</label>
        <select id="movie">
          <option value="10">The Flash ($12)</option>
          <option value="12">Across The Spiderverse ($13)</option>
          <option value="8">Transformers ($15)</option>
          <option value="9">One Piece: Film Red ($10)</option>
        </select>
      </div>
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="screen"></div>
        <div className="row">
          <div className="seat">1</div>
          <div className="seat">2</div>
          <div className="seat">3</div>
          <div className="seat">4</div>
          <div className="seat">5</div>
          <div className="seat">6</div>
          <div className="seat">7</div>
          <div className="seat">8</div>
        </div>
        <div className="row">
          <div className="seat">9</div>
          <div className="seat">10</div>
          <div className="seat">11</div>
          <div className="seat occupied">12</div>
          <div className="seat occupied">13</div>
          <div className="seat">14</div>
          <div className="seat">15</div>
          <div className="seat">16</div>
        </div>
        <div className="row">
          <div className="seat">17</div>
          <div className="seat">18</div>
          <div className="seat">19</div>
          <div className="seat">20</div>
          <div className="seat">21</div>
          <div className="seat">22</div>
          <div className="seat occupied">23</div>
          <div className="seat occupied">24</div>
        </div>
        <div className="row">
          <div className="seat">25</div>
          <div className="seat">26</div>
          <div className="seat">27</div>
          <div className="seat">28</div>
          <div className="seat">29</div>
          <div className="seat">30</div>
          <div className="seat">31</div>
          <div className="seat">32</div>
        </div>
        <div className="row">
          <div className="seat">33</div>
          <div className="seat">34</div>
          <div className="seat">35</div>
          <div className="seat occupied">36</div>
          <div className="seat occupied">37</div>
          <div className="seat">38</div>
          <div className="seat">39</div>
          <div className="seat">40</div>
        </div>
        <div className="row">
          <div className="seat">41</div>
          <div className="seat">42</div>
          <div className="seat">43</div>
          <div className="seat">44</div>
          <div className="seat occupied">45</div>
          <div className="seat occupied">47</div>
          <div className="seat occupied">48</div>
          <div className="seat">49</div>
        </div>
      </div>

      <p className="text">
        <span id="'count">0</span> selected seats. <br />
        Total: $<span id="total">0</span>
      </p>
    </>
  );
}

export default App;
