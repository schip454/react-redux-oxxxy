import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { secondToMMSS } from '../../utils/common';

import { Slider, IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const PlayBar = () => {
  const { currentTrack } = useSelector((state) => state.track);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const [audio] = useState(new Audio());

  const sliderCurrentTime = Math.round((currentTime / duration) * 100);
  const sliderVolume = Math.round(volume * 100);

  const formattedFullTrackTime = secondToMMSS(duration);
  const formattedCurrentTrackTime = secondToMMSS(currentTime);

  useEffect(() => {
    audio.src = currentTrack?.link?.url;
    audio.currentTime = 0;

    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
      audio.play();
      setIsPlaying(true);
      setIsOpen(true);
    };

    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [audio, currentTrack?.link?.url]);

  const handleToggleAudio = () => {
    setIsPlaying(true);
    setIsOpen(true);

    audio.play();

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleChangeCurrentTime = (e, value) => {
    const time = Math.round((value / 100) * duration);
    setCurrentTime(time);
    audio.currentTime = time;
  };

  const handleChangeVolume = (e, value) => {
    setVolume(value / 100);
    audio.volume = volume;
  };

  const handleMuteAudio = () => {
    setMuted(true);
    setVolume(0);
    audio.volume = 0;
  };

  const handleClosePlaybar = () => {
    setIsOpen(false);
    audio.pause();
    setIsPlaying(false);
  };

  if (!currentTrack) return '';
  if (!isOpen) return '';

  return (
    <div className="playbar">
      <button className="playbar__close" onClick={handleClosePlaybar}>
        <CancelOutlinedIcon />
      </button>
      <div className="playbar__info">
        <img
          className="playbar__image"
          src={currentTrack.cover.url}
          alt="123"
        />
        <IconButton onClick={handleToggleAudio}>
          {isPlaying ? (
            <Pause style={{ color: '#010101' }} />
          ) : (
            <PlayArrow style={{ color: '#010101' }} />
          )}
        </IconButton>

        <h4 className="playbar__title">{currentTrack.title}</h4>
      </div>
      <div className="playbar__controls">
        <p className="playbar__time">{formattedCurrentTrackTime}</p>
        <Slider
          className="playbar__slider"
          step={0.5}
          min={0.0}
          max={100}
          style={{ color: '#010101' }}
          value={sliderCurrentTime}
          onChange={handleChangeCurrentTime}
        />
        <p className="playbar__time">{formattedFullTrackTime}</p>
      </div>
      <div className="playbar__volume">
        <button
          className="playbar__mute"
          style={{ color: '#010101' }}
          onClick={handleMuteAudio}>
          {volume === 0 && muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </button>
        <Slider
          className="playbar__slider-volume"
          step={1}
          min={0}
          max={100}
          style={{ color: '#010101' }}
          value={sliderVolume}
          onChange={handleChangeVolume}
        />
      </div>
    </div>
  );
};

export default PlayBar;
