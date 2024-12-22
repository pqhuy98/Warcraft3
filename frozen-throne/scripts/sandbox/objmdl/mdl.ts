/*
Version {
	FormatVersion 800,
}
Model "terrain-only.obj" {
	NumGeosets 9,
	NumBones 9,
	BlendTime 0,
	MinimumExtent { -1132.0558, -2706.1628, -107.30951 },
	MaximumExtent { 467.94455, -1237.4133, 335.1549 },
	BoundsRadius 2831.571,
}
Sequences 1 {
	Anim "Stand" {
		Interval { 333, 1333 },
		MinimumExtent { -1132.0558, -2706.1628, -107.30951 },
		MaximumExtent { 467.94455, -1237.4133, 335.1549 },
		BoundsRadius 2831.571,
	}
}
Textures 9 {
	Bitmap {
		Image "maps/deathknightstart/tex_43_29.blp",
		WrapWidth,
		WrapHeight,
	}
  ...
}
Materials 9 {
	Material {
		ConstantColor,
		Layer {
			FilterMode None,
			static TextureID 0,
		}
		Layer {
			FilterMode None,
			static TextureID 0,
		}
	}
  ...
}
Geoset {
	Vertices 20353 {
		{ -600.8058, -2306.1628, 81.35128 },
		{ -598.7224, -2304.0793, 79.04919 },
    ...
	}
	Normals 20353 {
		{ -0.8776, -0.453, 0.1568 },
		{ -0.8656, -0.4752, 0.158 },
    ...
	}
	TVertices 20353 {
		{ 14.003905, -12.113279 },
		{ 13.999999, -12.109373 },
    ...
	}
	VertexGroup {
		0,
		0,
	}
	Faces 1 107133 {
		Triangles {
			{ 0, 1, 2, ...},
		}
	}
	Groups 1 1 {
		Matrices { 0 },
	}
	MinimumExtent { -1132.0558, -2706.1628, -107.30951 },
	MaximumExtent { 467.94455, -1237.4133, 335.1549 },
	BoundsRadius 2831.571,
	Anim {
		MinimumExtent { -1132.0558, -2706.1628, -107.30951 },
		MaximumExtent { 467.94455, -1237.4133, 335.1549 },
		BoundsRadius 2831.571,
	}
	MaterialID 0,
	SelectionGroup 0,
}
Geoset {
...
}
Geoset {
...
}
*/

export class MDL {
  version: {
		formatVersion: number
	}
  model: {
    name: string
    numGeosets: number
    numBones: number
    blendTime: number
    minimumExtent: [number, number, number]
    maximumExtent: [number, number, number]
    boundsRadius: number
  }
  sequences: {
    name: string
    interval: [number, number]
    minimumExtent: [number, number, number]
    maximumExtent: [number, number, number]
    boundsRadius: number
  }[]
  textures: {
    image: string
    wrapWidth: boolean
    wrapHeight: boolean
  }[]
  materials: {
    constantColor: boolean
    layers: {
      filterMode: string
      textureId: number
    }[]
  }[]
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
  }[]
	bones: {
		name: string
		objectId: number
		geosetId: number
		geosetAnimId: string
	}[]
	pivotPoints: [number, number, number][]

	constructor(props: {formatVersion: number, name: string}) {
		this.version = { formatVersion: props.formatVersion }
		this.model = {
			name: props.name,
			numGeosets: 0,
			numBones: 0,
			blendTime: 0,
			minimumExtent: [0, 0, 0],
			maximumExtent: [0, 0, 0],
			boundsRadius: 0
		}
		this.sequences = [
			{
				name: "Stand",
				interval: [333, 1333],
				minimumExtent: [0, 0, 0],
				maximumExtent: [0, 0, 0],
				boundsRadius: 0,
			}
		]
		this.textures = []
		this.materials = []
		this.geosets = []
		this.bones = []
		this.pivotPoints = []
	}

	versionToString() {
		return `
Version {
	FormatVersion ${this.version.formatVersion},
}`
	}

	modelToString() {
		return `Model "${this.model.name}" {
	NumGeosets ${this.model.numGeosets},
	NumBones ${this.model.numBones},
	BlendTime ${this.model.blendTime},
	MinimumExtent { ${f(this.model.minimumExtent[0])}, ${f(this.model.minimumExtent[1])}, ${f(this.model.minimumExtent[2])} },
	MaximumExtent { ${f(this.model.maximumExtent[0])}, ${f(this.model.maximumExtent[1])}, ${f(this.model.maximumExtent[2])} },
	BoundsRadius ${f(this.model.boundsRadius)},
}`
	}

	sequenceToString() {
		return `Sequences ${this.sequences.length} {
${this.sequences.map(sequence => `
	Anim "${sequence.name}" {
		Interval { ${sequence.interval[0]}, ${sequence.interval[1]} },
		MinimumExtent { ${f(sequence.minimumExtent[0])}, ${f(sequence.minimumExtent[1])}, ${f(sequence.minimumExtent[2])} },
		MaximumExtent { ${f(sequence.maximumExtent[0])}, ${f(sequence.maximumExtent[1])}, ${f(sequence.maximumExtent[2])} },
		BoundsRadius ${f(sequence.boundsRadius)},
	}`).join('\n')}
}`
	}

	textureToString() {
		return `Textures ${this.textures.length} {
${this.textures.map(texture => `
	Bitmap {
		Image "${texture.image}",
		${texture.wrapWidth ? "WrapWidth," : ""}
		${texture.wrapHeight ? "WrapHeight," : ""}
	}`).join('\n')}
}`
	}

	materialToString() {
		return `Materials ${this.materials.length} {
${this.materials.map(material => `
	Material {
		${material.constantColor ?  "ConstantColor," : ""}
		${material.layers.map(layer => `
		Layer {
			FilterMode ${layer.filterMode},
			static TextureID ${layer.textureId},
		}`).join('\n')}
	}`).join('\n')}
}`
	}

	geosetToString() {
		return this.geosets.map(geoset => `
Geoset {
	Vertices ${geoset.vertices.length} {
${geoset.vertices.map(vertex => `		{ ${f(vertex[0])}, ${f(vertex[1])}, ${f(vertex[2])} },`).join('\n')}
	}
	Normals ${geoset.normals.length} {
${geoset.normals.map(normal => `		{ ${f(normal[0])}, ${f(normal[1])}, ${f(normal[2])} },`).join('\n')}
	}
	TVertices ${geoset.tVertices.length} {
${geoset.tVertices.map(tVertex => `		{ ${f(tVertex[0])}, ${f(tVertex[1])} },`).join('\n')}
	}
	VertexGroup {
${geoset.vertexGroup.map(vertexGroup => `		${vertexGroup},`).join('\n')}
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
}`).join('\n')
	}

	boneToString() {
		return this.bones.map(bone => `Bone "${bone.name}" {
	ObjectId ${bone.objectId},
	GeosetId ${bone.geosetId},
	GeosetAnimId ${bone.geosetAnimId},
}`).join('\n')
	}

	pivotPointsToString() {
		return `PivotPoints ${this.pivotPoints.length} {
${this.pivotPoints.map(pivotPoint => `	{ ${f(pivotPoint[0])}, ${f(pivotPoint[1])}, ${f(pivotPoint[2])} },`).join('\n')}
}`
	}

	toString() {
		this.sync()
		return `// Saved by Huy's custom OBJ-MDL converter
${this.versionToString()}
${this.modelToString()}
${this.sequenceToString()}
${this.textureToString()}
${this.materialToString()}
${this.geosetToString()}
${this.boneToString()}
${this.pivotPointsToString()}
`.split("\n").filter(l => l.trim().length > 0).join("\n")
	}

	sync() {
		this.model.numGeosets = this.geosets.length
		this.model.numBones = this.bones.length
		this.geosets.forEach(geoset => {
			const min: [number, number, number] = [Infinity, Infinity, Infinity]
			const max: [number, number, number] = [-Infinity, -Infinity, -Infinity]
			geoset.vertices.forEach(([x, y, z]) => {
				min[0] = Math.min(min[0], x)
				min[1] = Math.min(min[1], y)
				min[2] = Math.min(min[2], z)
				max[0] = Math.max(max[0], x)
				max[1] = Math.max(max[1], y)
				max[2] = Math.max(max[2], z)
			})
			geoset.minimumExtent = min
			geoset.maximumExtent = max
			geoset.boundsRadius = calculateBoundRadius(geoset.vertices)
			geoset.anim.minimumExtent = [...geoset.minimumExtent]
			geoset.anim.maximumExtent = [...geoset.maximumExtent]
			geoset.anim.boundsRadius = geoset.boundsRadius
		})

		if (this.geosets.length > 0) {
			this.model.minimumExtent = this.geosets.map(geoset => geoset.minimumExtent).reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2])])
			this.model.maximumExtent = this.geosets.map(geoset => geoset.maximumExtent).reduce((a, b) => [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2])])
			this.model.boundsRadius = this.geosets.reduce((a, b) => Math.max(a, b.boundsRadius), 0)
		}


		this.sequences.forEach(s => {
			s.minimumExtent = [...this.model.minimumExtent]
			s.maximumExtent = [...this.model.maximumExtent]
			s.boundsRadius = this.model.boundsRadius
		})

		this.geosets.forEach((geoset, i) => {
			if (this.pivotPoints.length <= i) {
				this.pivotPoints.push([
					(geoset.maximumExtent[0] + geoset.minimumExtent[0]) / 2,
					(geoset.maximumExtent[1] + geoset.minimumExtent[1]) / 2,
					(geoset.maximumExtent[2] + geoset.minimumExtent[2]) / 2,
				])
			} else {
				this.pivotPoints[i] = [
					(geoset.maximumExtent[0] + geoset.minimumExtent[0]) / 2,
					(geoset.maximumExtent[1] + geoset.minimumExtent[1]) / 2,
					(geoset.maximumExtent[2] + geoset.minimumExtent[2]) / 2,
				]
			}
		})
		
	}
}

function calculateBoundRadius(vertices) {
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
	return parseFloat(num.toFixed(6)).toString()
}