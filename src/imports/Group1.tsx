import svgPaths from "./svg-60kfjqlgsq";
import { imgClipPathGroup, imgClipPathGroup1 } from "./svg-gvm9c";

function ClipPathGroup() {
  return (
    <div className="[mask-clip:no-clip,_no-clip,_no-clip] [mask-composite:intersect,_intersect,_intersect] [mask-mode:alpha,_alpha,_alpha] [mask-repeat:no-repeat,_no-repeat,_no-repeat] absolute inset-[40%_17.86%_12.5%_14.29%] mask-position-[-4px,_-4px,_0px_-16px,_-16px,_0px] mask-size-[28px_40px,_28px_40px,_19px_19px] opacity-[0.18]" data-name="Clip path group" style={{ maskImage: `url('${imgClipPathGroup}'), url('${imgClipPathGroup}'), url('${imgClipPathGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Clip path group">
          <mask height="19" id="mask0_7_189" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="19" x="0" y="0">
            <g id="SVGID_8_">
              <path d="M19 0H0V19H19V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_189)">
            <path d={svgPaths.p2eedc80} id="Vector_2" stroke="var(--stroke-0, #231F20)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[40%_17.86%_12.5%_14.29%]" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[40%_17.86%_12.5%_14.29%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[40%_17.86%_12.5%_14.29%]" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[40%_17.86%_12.5%_14.29%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[28px_40px]" data-name="Clip path group" style={{ maskImage: `url('${imgClipPathGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 40">
        <g id="Clip path group">
          <mask height="40" id="mask0_7_179" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="28" x="0" y="0">
            <g id="SVGID_4_">
              <path d="M28 0H0V40H28V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_179)">
            <path d={svgPaths.p1f24dc80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup2 />
      <ClipPathGroup3 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup4 />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 40">
        <g id="Clip path group">
          <mask height="40" id="mask0_7_174" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="28" x="0" y="0">
            <g id="SVGID_2_">
              <path d="M28 0H0V40H28V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_174)">
            <path d={svgPaths.p15e07c00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 40">
        <g id="Clip path group">
          <mask height="40" id="mask0_7_184" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="28" x="0" y="0">
            <g id="SVGID_2_">
              <path d="M28 0H0V40H28V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_184)">
            <path d={svgPaths.pa367a80} fill="var(--fill-0, black)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Notallowed() {
  return (
    <div className="absolute h-[40px] left-0 overflow-clip top-0 w-[28px]" data-name="notallowed">
      <Group5 />
    </div>
  );
}

function Cursor() {
  return (
    <div className="absolute left-[68px] size-[28px] top-0" data-name="cursor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="cursor">
          <path d={svgPaths.p3b033c00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p13e15200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p32516e00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p786fe80} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Clip path group">
          <mask height="32" id="mask0_7_163" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
            <g id="SVGID_2_">
              <path d="M32 0H0V32H32V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_163)">
            <path d={svgPaths.p26346b70} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Clip path group">
          <mask height="32" id="mask0_7_158" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
            <g id="SVGID_2_">
              <path d="M32 0H0V32H32V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_158)">
            <path d={svgPaths.p26346b70} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          </g>
        </g>
      </svg>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Clip path group">
          <mask height="32" id="mask0_7_153" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
            <g id="SVGID_2_">
              <path d="M32 0H0V32H32V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_153)">
            <path d="M19.6 20.7V17.3" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
          </g>
        </g>
      </svg>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Clip path group">
          <mask height="32" id="mask0_7_148" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
            <g id="SVGID_2_">
              <path d="M32 0H0V32H32V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_148)">
            <path d="M17.6 20.7L17.5 17.3" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
          </g>
        </g>
      </svg>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Clip path group">
          <mask height="32" id="mask0_7_140" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
            <g id="SVGID_2_">
              <path d="M32 0H0V32H32V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_7_140)">
            <path d="M15.6 17.3V20.7" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Pointinghand() {
  return (
    <div className="absolute left-0 overflow-clip size-[32px] top-[80px]" data-name="pointinghand">
      <Group6 />
    </div>
  );
}

function Move() {
  return (
    <div className="absolute left-[72px] size-[18px] top-[80px]" data-name="move">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="move">
          <path d={svgPaths.p37157600} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1f1e5600} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p39577300} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Notallowed />
      <Cursor />
      <Pointinghand />
      <Move />
    </div>
  );
}