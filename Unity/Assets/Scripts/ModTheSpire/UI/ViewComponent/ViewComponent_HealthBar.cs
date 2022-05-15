using FairyGUI;
using UnityEngine;

namespace ModTheSpire.UI.ViewComponent
{
    public class ViewComponent_HealthBar
    {
        private GProgressBar mProgressBar;
        private int mCacheWidth;
        private GObject mBackground;
        private GObject mMiddle;
        private GObject mBar;
        private GTextField mDisplayText;
        private int mValue;
        private bool mFirstSet = false;

        public int Max
        {
            get => (int)mProgressBar.max;
            set
            {
                mProgressBar.max = value;
                if (!mFirstSet)
                {
                    mValue = value;
                    mProgressBar.value = value;
                    mFirstSet = true;
                }
            }
        }

        public int Value
        {
            get => (int)mProgressBar.value;
            set
            {
                mDisplayText.text = value + "/" + this.Max;
                //如果正在Tween,我们重新获取一下宽度
                if (FairyGUI.GTween.IsTweening(this.mMiddle))
                {
                    this.ResetCachePosition();
                }

                if (this.mValue < value)
                {
                    this.mMiddle.width = this.mBackground.width * value / this.Max;
                    mProgressBar.TweenValue(value, 0.5f).SetDelay(1).SetEase(FairyGUI.EaseType.SineInOut).OnComplete(this.ResetCachePosition);
                }
                else if (this.mValue > value)
                {
                    mProgressBar.value = value;
                    mMiddle.width = mCacheWidth;
                    mMiddle.TweenResize(new Vector2(mBackground.width * value / this.Max, mMiddle.height), 0.5f).SetEase(EaseType.SineInOut)
                        .SetDelay(1)
                        .OnComplete(this.ResetCachePosition);
                }

                this.mValue = value;
            }
        }

        public bool Visible
        {
            get => mProgressBar.visible;
            set => mProgressBar.visible = value;
        }

        public ViewComponent_HealthBar(FairyGUI.GProgressBar progress)
        {
            mProgressBar = progress;
            mDisplayText = mProgressBar.GetChild("DisplayText").asTextField;
            mMiddle = mProgressBar.GetChild("Middle");
            mBar = mProgressBar.GetChild("bar");
            mMiddle.width = mBar.width;
            mBackground = mProgressBar.GetChild("Background");
            mValue = this.Max;
            ResetCachePosition();
        }

        private void ResetCachePosition()
        {
            this.mCacheWidth = (int)Mathf.Clamp(this.mMiddle.width, 0, this.mBackground.width);
        }
    }
}