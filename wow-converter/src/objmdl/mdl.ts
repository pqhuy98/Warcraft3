import _ from 'lodash';

/* eslint-disable no-tabs */
export class MDL {
  version: {
    formatVersion: number
  };

  model: {
    name: string
    numGeosets: number
    numBones: number
    blendTime: number
    minimumExtent: [number, number, number]
    maximumExtent: [number, number, number]
    boundsRadius: number
  };

  sequences: {
    name: string
    interval: [number, number]
    minimumExtent: [number, number, number]
    maximumExtent: [number, number, number]
    boundsRadius: number
  }[];

  textures: {
    image: string
    wrapWidth: boolean
    wrapHeight: boolean
  }[];

  materials: {
    constantColor: boolean
    layers: {
      filterMode: string
      textureId: number
      twoSided: boolean
    }[]
  }[];

  geosets: {
    vertices: [number, number, number][]
    normals: [number, number, number][]
    tVertices: [number, number][]
    vertexGroup: number[]
    faces: {
      triangles: number[]
    }
    groups: {
      matrices: number[]
    }[]
    minimumExtent: [number, number, number]
    maximumExtent: [number, number, number]
    boundsRadius: number
    anim: {
      minimumExtent: [number, number, number]
      maximumExtent: [number, number, number]
      boundsRadius: number
    }
    materialId: number
    selectionGroup: number
  }[];

  bones: {
    name: string
    objectId: number
    geosetId: number
    geosetAnimId: string
  }[];

  pivotPoints: [number, number, number][];

  constructor(props: {formatVersion: number, name: string}) {
    this.version = { formatVersion: props.formatVersion };
    this.model = {
      name: props.name,
      numGeosets: 0,
      numBones: 0,
      blendTime: 0,
      minimumExtent: [0, 0, 0],
      maximumExtent: [0, 0, 0],
      boundsRadius: 0,
    };
    this.sequences = [
      {
        name: 'Stand',
        interval: [333, 1333],
        minimumExtent: [0, 0, 0],
        maximumExtent: [0, 0, 0],
        boundsRadius: 0,
      },
    ];
    this.textures = [];
    this.materials = [];
    this.geosets = [];
    this.bones = [];
    this.pivotPoints = [];
  }

  versionToString() {
    return `
Version {
  FormatVersion ${this.version.formatVersion},
}`;
  }

  modelToString() {
    return `Model "${this.model.name}" {
  NumGeosets ${this.model.numGeosets},
  NumBones ${this.model.numBones},
  BlendTime ${this.model.blendTime},
  MinimumExtent { ${f(this.model.minimumExtent[0])}, ${f(this.model.minimumExtent[1])}, ${f(this.model.minimumExtent[2])} },
  MaximumExtent { ${f(this.model.maximumExtent[0])}, ${f(this.model.maximumExtent[1])}, ${f(this.model.maximumExtent[2])} },
  BoundsRadius ${f(this.model.boundsRadius)},
}`;
  }

  sequenceToString() {
    return `Sequences ${this.sequences.length} {
${this.sequences.map((sequence) => `
  Anim "${sequence.name}" {
    Interval { ${sequence.interval[0]}, ${sequence.interval[1]} },
    MinimumExtent { ${f(sequence.minimumExtent[0])}, ${f(sequence.minimumExtent[1])}, ${f(sequence.minimumExtent[2])} },
    MaximumExtent { ${f(sequence.maximumExtent[0])}, ${f(sequence.maximumExtent[1])}, ${f(sequence.maximumExtent[2])} },
    BoundsRadius ${f(sequence.boundsRadius)},
  }`).join('\n')}
}`;
  }

  textureToString() {
    return `Textures ${this.textures.length} {
${this.textures.map((texture) => `
  Bitmap {
    Image "${texture.image}",
    ${texture.wrapWidth ? 'WrapWidth,' : ''}
    ${texture.wrapHeight ? 'WrapHeight,' : ''}
  }`).join('\n')}
}`;
  }

  materialToString() {
    return `Materials ${this.materials.length} {
${this.materials.map((material) => `
  Material {
    ${material.constantColor ? 'ConstantColor,' : ''}
    ${material.layers.map((layer) => `
    Layer {
      FilterMode ${layer.filterMode},
      static TextureID ${layer.textureId},
      ${layer.twoSided ? 'TwoSided,' : ''}
    }`).join('\n')}
  }`).join('\n')}
}`;
  }

  geosetToString() {
    return this.geosets.map((geoset) => `
Geoset {
  Vertices ${geoset.vertices.length} {
${geoset.vertices.map((vertex) => `		{ ${f(vertex[0])}, ${f(vertex[1])}, ${f(vertex[2])} },`).join('\n')}
  }
  Normals ${geoset.normals.length} {
${geoset.normals.map((normal) => `		{ ${f(normal[0])}, ${f(normal[1])}, ${f(normal[2])} },`).join('\n')}
  }
  TVertices ${geoset.tVertices.length} {
${geoset.tVertices.map((tVertex) => `		{ ${f(tVertex[0])}, ${f(tVertex[1])} },`).join('\n')}
  }
  VertexGroup {
${geoset.vertexGroup.map((vertexGroup) => `		${vertexGroup},`).join('\n')}
  }
  Faces 1 ${geoset.faces.triangles.length} {
    Triangles {
      { ${geoset.faces.triangles.join(', ')} },
    }
  }
  Groups 1 1 {
    Matrices { ${geoset.groups[0].matrices[0]} },
  }
  MinimumExtent { ${f(geoset.minimumExtent[0])}, ${f(geoset.minimumExtent[1])}, ${f(geoset.minimumExtent[2])} },
  MaximumExtent { ${f(geoset.maximumExtent[0])}, ${f(geoset.maximumExtent[1])}, ${f(geoset.maximumExtent[2])} },
  BoundsRadius ${f(geoset.boundsRadius)},
  Anim {
    MinimumExtent { ${f(geoset.anim.minimumExtent[0])}, ${f(geoset.anim.minimumExtent[1])}, ${f(geoset.anim.minimumExtent[2])} },
    MaximumExtent { ${f(geoset.anim.maximumExtent[0])}, ${f(geoset.anim.maximumExtent[1])}, ${f(geoset.anim.maximumExtent[2])} },
    BoundsRadius ${f(geoset.anim.boundsRadius)},
  }
  MaterialID ${geoset.materialId},
  SelectionGroup ${geoset.selectionGroup},
}`).join('\n');
  }

  boneToString() {
    return this.bones.map((bone) => `Bone "${bone.name}" {
  ObjectId ${bone.objectId},
  GeosetId ${bone.geosetId},
  GeosetAnimId ${bone.geosetAnimId},
}`).join('\n');
  }

  pivotPointsToString() {
    return `PivotPoints ${this.pivotPoints.length} {
${this.pivotPoints.map((pivotPoint) => `	{ ${f(pivotPoint[0])}, ${f(pivotPoint[1])}, ${f(pivotPoint[2])} },`).join('\n')}
}`;
  }

  toString() {
    return `// Saved by Huy's custom OBJ-MDL converter
${this.versionToString()}
${this.modelToString()}
${this.sequenceToString()}
${this.textureToString()}
${this.materialToString()}
${this.geosetToString()}
${this.boneToString()}
${this.pivotPointsToString()}
`.split('\n').filter((l) => l.trim().length > 0).join('\n');
  }

  sync() {
    this.model.numGeosets = this.geosets.length;
    this.model.numBones = this.bones.length;
    this.geosets.forEach((geoset) => {
      const min: [number, number, number] = [Infinity, Infinity, Infinity];
      const max: [number, number, number] = [-Infinity, -Infinity, -Infinity];
      geoset.vertices.forEach(([x, y, z]) => {
        min[0] = Math.min(min[0], x);
        min[1] = Math.min(min[1], y);
        min[2] = Math.min(min[2], z);
        max[0] = Math.max(max[0], x);
        max[1] = Math.max(max[1], y);
        max[2] = Math.max(max[2], z);
      });
      geoset.minimumExtent = min;
      geoset.maximumExtent = max;
      geoset.boundsRadius = calculateBoundRadius(geoset.vertices);
      geoset.anim.minimumExtent = [...geoset.minimumExtent];
      geoset.anim.maximumExtent = [...geoset.maximumExtent];
      geoset.anim.boundsRadius = geoset.boundsRadius;
    });

    if (this.geosets.length > 0) {
      this.model.minimumExtent = this.geosets.map((geoset) => geoset.minimumExtent).reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2])]);
      this.model.maximumExtent = this.geosets.map((geoset) => geoset.maximumExtent).reduce((a, b) => [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2])]);
      this.model.boundsRadius = this.geosets.reduce((a, b) => Math.max(a, b.boundsRadius), 0);
    }

    this.sequences.forEach((s) => {
      s.minimumExtent = [...this.model.minimumExtent];
      s.maximumExtent = [...this.model.maximumExtent];
      s.boundsRadius = this.model.boundsRadius;
    });

    this.geosets.forEach((geoset, i) => {
      if (this.pivotPoints.length <= i) {
        this.pivotPoints.push([
          (geoset.maximumExtent[0] + geoset.minimumExtent[0]) / 2,
          (geoset.maximumExtent[1] + geoset.minimumExtent[1]) / 2,
          (geoset.maximumExtent[2] + geoset.minimumExtent[2]) / 2,
        ]);
      } else {
        this.pivotPoints[i] = [
          (geoset.maximumExtent[0] + geoset.minimumExtent[0]) / 2,
          (geoset.maximumExtent[1] + geoset.minimumExtent[1]) / 2,
          (geoset.maximumExtent[2] + geoset.minimumExtent[2]) / 2,
        ];
      }
    });
  }

  // setInfiniteExtents() {
  //   const INF = 999999;
  //   this.model.minimumExtent = [-INF, -INF, -INF];
  //   this.model.maximumExtent = [INF, INF, INF];
  //   this.model.boundsRadius = INF;
  //   this.geosets.forEach((geoset) => {
  //     geoset.minimumExtent = [-INF, -INF, -INF];
  //     geoset.maximumExtent = [INF, INF, INF];
  //     geoset.boundsRadius = INF;
  //     geoset.anim.minimumExtent = [-INF, -INF, -INF];
  //     geoset.anim.maximumExtent = [INF, INF, INF];
  //     geoset.anim.boundsRadius = INF;
  //   });
  //   this.sequences.forEach((s) => {
  //     s.minimumExtent = [-INF, -INF, -INF];
  //     s.maximumExtent = [INF, INF, INF];
  //     s.boundsRadius = INF;
  //   });
  // }

  setInfiniteExtents() {
    const fixExtents = (min: number[], max: number[]) => {
      for (let i = 0; i < min.length; i++) {
        const abs = Math.max(Math.abs(min[i]), Math.abs(max[i]));
        min[i] = -abs * 3;
        max[i] = abs * 3;
      }
    };

    fixExtents(this.model.minimumExtent, this.model.maximumExtent);
    this.model.boundsRadius = _.max(this.model.maximumExtent)!;
    this.geosets.forEach((geoset) => {
      fixExtents(geoset.minimumExtent, geoset.maximumExtent);
      geoset.boundsRadius = _.max(geoset.maximumExtent)!;
      fixExtents(geoset.anim.minimumExtent, geoset.anim.maximumExtent);
      geoset.anim.boundsRadius = _.max(geoset.anim.maximumExtent)!;
    });
    this.sequences.forEach((s) => {
      fixExtents(s.minimumExtent, s.maximumExtent);
      s.boundsRadius = _.max(s.maximumExtent)!;
    });
  }

  scale(value: number) {
    this.geosets.forEach((geoset) => {
      geoset.vertices.forEach((vertex) => {
        vertex[0] *= value;
        vertex[1] *= value;
        vertex[2] *= value;
      });
    });
  }
}

function calculateBoundRadius(vertices: [number, number, number][]) {
  let maxDistance = 0;
  for (let i = 0; i < vertices.length; i++) {
    const [x, y, z] = vertices[i];
    const distance = Math.sqrt(x * x + y * y + z * z);
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }

  return maxDistance;
}

function f(num: number) {
  return parseFloat(num.toFixed(6)).toString();
}
